# Tekhelet
Tekhelet – The look and feel of the Kisow Foundation.  
Matthew R. Kisow, D.Sc. <matthew.kisow@kisow.org>  
Copyright 2015-2017, Kisow Foundation, Inc.  
  
The Tekhelet theme is based in part on the Tyrian theme by Alex Legler.

## History
Tekhelet, is an ancient blue-violet dye that was made from the marine creature known as the Hillazon.  This dye is mentioned throughout the Hebrew Tanakh (Bible) and was the color traditionally worn by the religions high priests.  This color can range from violet-blue to  a bluish purple.

## Development
1. From your development directory clone tekhelet-source from https://github.com/DoctorKisow/tekhelet-source.git

## macOS
1. Download and install the node.js package from https://nodejs.org/it/download.
2. From a terminal window, install "npm" globally.
   sudo npm install npm --global
3. Create a node directory.
   mkdir -p /Users/<username>/Development/tekhelet-source
   cd /Users/<username>/Development/tekhelet-source
4. From a terminal window, install "bootstrap" locally.
   npm install bootstrap@3
   mkdir -p sources/css/bootstrap
   cp -a node_modules/bootstrap sources/css/
5. From a terminal window, install "grunt" globally.
   sudo npm install -g grunt-cli
6. From a terminal window, install "grunt" locally.
   npm install grunt --save-dev
   npm install grunt-contrib-copy --save-dev
   npm install grunt-shell --save-dev
   cd sources/css/tekhelet-source
   npm install grunt --save-dev
   npm install grunt-contrib-less --save-dev
   npm install grunt-contrib-watch --save-dev
   npm install grunt-copy --save-dev
   npm install grunt-replace --save-dev
   npm install grunt-sed --save-dev
   npm install grunt-shell --save-dev
   cd ../bootstrap
   npm install grunt --save-dev
   npm install markdown-it --save-dev
   npm install bota --save-dev
   npm install glob --save-dev
   npm install load-grunt-tasks --save-dev
   npm install grunt-autoprefixer --save-dev
   npm install grunt-contrib-clean --save-dev
   npm install grunt-contrib-compress --save-dev
   npm install grunt-contrib-concat --save-dev
   npm install grunt-contrib-connect --save-dev
   npm install grunt-contrib-copy --save-dev
   npm install grunt-contrib-csslint --save-dev
   npm install grunt-contrib-cssmin --save-dev
   npm install grunt-contrib-htmlmin --save-dev
   npm install grunt-contrib-jshint --save-dev
   npm install grunt-contrib-less --save-dev
   npm install grunt-contrib-pug --save-dev
   npm install grunt-contrib-qunit --save-dev
   npm install grunt-contrib-uglify --save-dev
   npm install grunt-contrib-watch --save-dev
   npm install grunt-csscomb --save-dev
   npm install grunt-exec --save-dev
   npm install grunt-html --save-dev
   npm install grunt-jekyll --save-dev
   npm install grunt-jscs --save-dev
   npm install grunt-saucelabs --save-dev
   npm install time-grunt --save-dev
   npm install shelljs --save-dev
   npm install shx --save-dev
7. Run "npm install" in the root of tekhelet-source, tekhelet-source/sources/css/bootstrap and tekhelet-source/sources/css/tekhelet
   cd /Users/<username>/Development/tekhelet-source
   npm install
   npm install sources/css/bootstrap
   npm install sources/css/tekhelet
8. Run grunt from the root of tekhelet
   cd /Users/<username>/Development/tekhelet-source
   grunt

## Ubuntu/Debian
1. Install "nodejs" and "npm" from the apt repository.  
   sudo apt-get install nodejs  
   sudo ln -s "$(which nodejs)" /usr/local/bin/node  
   sudo apt-get install npm  
2. Create a node directory.  
   mkdir -p /home/<username>/Development/tekhelet-source  
   cd /home/<username>/Development/tekhelet-source  
3. From a terminal window, install "bootstrap" locally.  
   npm install bootstrap@3  
   mkdir -p sources/css/bootstrap  
   cp -a node_modules/bootstrap sources/css/  
4. From a terminal window, install "grunt" globally.  
   sudo npm install -g grunt-cli  
5. From a terminal window, install "grunt" locally.  
   npm install grunt --save-dev  
   npm install grunt-contrib-copy --save-dev  
   npm install grunt-shell --save-dev  
   cd sources/css/tekhelet  
   npm install grunt --save-dev  
   npm install grunt-contrib-less --save-dev  
   npm install grunt-contrib-watch --save-dev  
   npm install grunt-copy --save-dev  
   npm install grunt-replace --save-dev  
   npm install grunt-sed --save-dev  
   npm install grunt-shell --save-dev  
   cd ../bootstrap  
   npm install grunt --save-dev  
   npm install markdown-it --save-dev  
   npm install bota --save-dev  
   npm install glob --save-dev  
   npm install load-grunt-tasks --save-dev  
   npm install grunt-autoprefixer --save-dev  
   npm install grunt-contrib-clean --save-dev  
   npm install grunt-contrib-compress --save-dev  
   npm install grunt-contrib-concat --save-dev  
   npm install grunt-contrib-connect --save-dev  
   npm install grunt-contrib-copy --save-dev  
   npm install grunt-contrib-csslint --save-dev  
   npm install grunt-contrib-cssmin --save-dev  
   npm install grunt-contrib-htmlmin --save-dev  
   npm install grunt-contrib-jshint --save-dev  
   npm install grunt-contrib-less --save-dev  
   npm install grunt-contrib-pug --save-dev  
   npm install grunt-contrib-qunit --save-dev  
   npm install grunt-contrib-uglify --save-dev  
   npm install grunt-contrib-watch --save-dev  
   npm install grunt-csscomb --save-dev  
   npm install grunt-exec --save-dev  
   npm install grunt-html --save-dev  
   npm install grunt-jekyll --save-dev  
   npm install grunt-jscs --save-dev  
   npm install grunt-saucelabs --save-dev  
   npm install time-grunt --save-dev  
   npm install shelljs --save-dev  
   npm install shx --save-dev  
6. Run "npm install" in the root of tekhelet-source, tekhelet-source/sources/css/bootstrap and tekhelet-source/sources/css/tekhelet  
   npm install  
   npm install sources/css/bootstrap  
   npm install sources/css/tekhelet  
7. Run grunt from the root of tekhelet-source  
   cd /home/<username>/Development/tekhelet-source  
   grunt  

## Other Distro's
1. Should be similar to what is documented above; just use your distribution's package manager to install NPM.  
