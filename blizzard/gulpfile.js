// Importando os módulos necessários
import gulp from "gulp"; // Automatizador de tarefas
import gulpAutoprefixer from "gulp-autoprefixer"; // Adiciona prefixos CSS automaticamente
import gulpSass from "gulp-sass"; // Compila arquivos Sass para CSS
import * as dartSass from "sass"; // Motor de compilação Sass
import browserSync from "browser-sync"; // Sincroniza alterações em tempo real no navegador
import concat from "gulp-concat"; // Concatena múltiplos arquivos em um só
import wrap from "gulp-wrap"; // Envolve o conteúdo dos arquivos com um template
import babel from "gulp-babel";
import uglify from "gulp-uglify";

// Configurando o compilador Sass
const sass = gulpSass(dartSass);
// Criando uma instância do BrowserSync
const server = browserSync.create();

// Definindo os caminhos dos arquivos
const paths = {
  styles: {
    src: "src/styles/sass/**/*.scss", // Caminho dos arquivos Sass de entrada
    dest: "src/styles/", // Caminho do CSS compilado
  },
  scripts: {
    src: "src/scripts/js/**/*.js", // Caminho dos arquivos JavaScript de entrada
    dest: "src/scripts/", // Caminho do JavaScript concatenado
  },
  pluginsCSS: {
    src: "src/styles/lib/*.css", // Caminho dos arquivos CSS de plugins
    dest: "src/styles/", // Destino dos arquivos CSS de plugins concatenados
  },
  pluginsJS: {
    src: "src/scripts/lib/*.js", // Caminho dos arquivos JS de plugins
    dest: "src/scripts/", // Destino dos arquivos JS de plugins concatenados
  },
};

// Função para compilar arquivos Sass para CSS
const compileSass = () => {
  return gulp
    .src(paths.styles.src) // Fonte dos arquivos Sass
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError)) // Compila e comprime o CSS
    .pipe(
      gulpAutoprefixer({
        overrideBrowserslist: ["last 2 versions"], // Adiciona prefixos para as duas últimas versões dos navegadores
        cascade: false, // Desativa o estilo cascata nos prefixos
      })
    )
    .pipe(concat("all.min.css")) // Concatena todos os arquivos CSS em um só
    .pipe(gulp.dest(paths.styles.dest)) // Destino do arquivo CSS compilado
    .pipe(server.stream()); // Atualiza o navegador com as mudanças
};

// Função para compilar e empacotar arquivos JavaScript
const gulpJs = () => {
  return gulp
    .src(paths.scripts.src) // Fonte dos arquivos JavaScript
    .pipe(wrap("(function(){\n<%= contents %>\n})();")) // Empacota cada arquivo JS em uma IIFE
    .pipe(concat("all.min.js")) // Concatena todos os arquivos JavaScript em um só
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(uglify())
    .pipe(gulp.dest(paths.scripts.dest)) // Destino do arquivo JavaScript concatenado
    .pipe(server.stream()); // Atualiza o navegador com as mudanças
};

// Função para concatenar arquivos CSS de plugins
const pluginsCSS = () => {
  return gulp
    .src(paths.pluginsCSS.src) // Fonte dos arquivos CSS de plugins
    .pipe(concat("plugins.css")) // Concatena todos os arquivos CSS de plugins em um só
    .pipe(gulp.dest(paths.pluginsCSS.dest)) // Destino do arquivo CSS de plugins concatenado
    .pipe(server.stream()); // Atualiza o navegador com as mudanças
};

// Função para concatenar arquivos JS de plugins
const pluginsJs = () => {
  return gulp
    .src(paths.pluginsJS.src) // Fonte dos arquivos JS de plugins
    .pipe(wrap("(function(){\n<%= contents %>\n})();")) // Empacota cada arquivo JS em uma IIFE
    .pipe(concat("plugins.js")) // Concatena todos os arquivos JS de plugins em um só
    .pipe(uglify())
    .pipe(gulp.dest(paths.pluginsJS.dest)) // Destino do arquivo JS de plugins concatenado
    .pipe(server.stream()); // Atualiza o navegador com as mudanças
};

// Função para iniciar o servidor de desenvolvimento com BrowserSync
const startServer = () => {
  server.init({
    server: {
      baseDir: "./", // Diretório base do servidor
    },
  });
};

// Função para monitorar mudanças nos arquivos e executar tarefas correspondentes
const watchFiles = () => {
  gulp.watch(paths.styles.src, compileSass); // Monitora mudanças nos arquivos Sass e recompila o CSS
  gulp.watch(paths.pluginsCSS.src, pluginsCSS); // Monitora mudanças nos arquivos CSS de plugins e concatena
  gulp.watch(paths.scripts.src, gulpJs).on("change", server.reload); // Monitora mudanças nos arquivos JavaScript e reconstrói o arquivo concatenado
  gulp.watch(paths.pluginsJS.src, pluginsJs); // Monitora mudanças nos arquivos JS de plugins e concatena
  gulp.watch("*.html").on("change", server.reload); // Monitora mudanças nos arquivos HTML e recarrega o navegador
};

// Tarefa inicial que compila CSS, JavaScript e inicia o servidor
const start = gulp.series(
  compileSass,
  gulpJs,
  pluginsCSS,
  pluginsJs,
  startServer
);
// Tarefa padrão que executa a tarefa inicial e monitora os arquivos
export default gulp.parallel(start, watchFiles);
