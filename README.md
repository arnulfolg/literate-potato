1.- Introduction

This guide has the purpose of explaining the necessary steps to compile the source code for the Project.

The necessary steps for the set up of the development environment are explained; finally, you will learn how
to start the Project both in development mode and production mode.

2.- Requirements for the Project

    CSS libraries:

    CSS Preprocessors:
        SASS

    HTML Preprocessors:
        Jade (Pug)

    Task Runner:
        Grunt

    JavaScript libraries:
        jQuery
        
    Nodejs (for working with npm, Grunt and Grunt plugins)

You should install Node.js prior to the next step. Currently, the Project has installed 
version 6.9.1LTS for Node.js, and version 3.3.7 for Bootstrap. For jQuery, the Project is using 
version 3.1.1. The Project uses the latest versions for the remaining tools.



2.1.- Installing SASS

The Project uses the Sass CSS preprocessor; hence, in order to set up your development environment,
you should complete the following steps:

a) Download and install rubyinstaller.exe (http://rubyinstaller.org/)

b) Once completed the later step, install Sass issuing the following command in the command prompt: 
    gem install sass


3) Structure for the Project

In order to get a clear separation between development and build assets, the Project is structured as follows:

    a) The development folder contains the following:

    * Sass Folder
    * Assets folder, containing the following folders: images, icomoon-fonts, bootstrap-fonts
    * js folder
    * css folder
    * node_modules folder
    * Gruntfile.js
    * package.json
    * index.html 
    * Web.config 
    * Web.Debug.config

    
    The package.json and Gruntfile.js files are the main files needed to configure the Project.
    The package.json file lists Grunt and the Grunt plugins required as devDependencies in this file.
    The Gruntfile.js is used to define and configure tasks and to load Grunt plugins.
    Both of this files should be commited with your project source, using your preferred VCS software.

    b) The folder "dist" is created by means of Grunt. It contains the following:

    * Assets folder, containing the following folders: images, icomoon-fonts, bootstrap-fonts
    * js folder
    * css folder
    * index.html


3.1) Estructure for the Sass folder

The Sass folder contains the sources for Bootstrap as well as for the Application. This way, we can customize
Bootstrap as we need. By using Grunt, we compile the Sass sources and, on top of that, we add the Sass 
sources for the application. The end result of this is a single, minified file for Styles.

Also, each component in the Application (like navigation bars, Heros, footer, and so on) will have its own
sass module here.


4) How to get the folder "dist"

To get the most updated production version for the Application, you should generate an updated version for 
the "dist" folder. To accomplish this, please go to the directory for the Project, open a console as Administrator 
(for Windows), and type the following commands in order (you may need to use sudo for other systems):


> npm install -g grunt-cli
(Explanation: this command line interface allows Grunt to work with distinct versions of the grunt runner).

> npm install   
(Explanation: This command will install all of the dependencies for the Project listed in the file package.json 
located at the root of the Project)

> grunt


The default Grunt task will be started and, as a result, a new "dist" folder will be created, containing
the most recent version of the Application. To execute the Application, simply open the file index.html within 
this folder.

The set of tasks applied to get the "dist" folder is contained within the Gruntfile.js, and this file
has been fully commented in order to be able to understand its content. 


5) Location of the file index.html

As explained before, in order to being able to run the Project, you should open the file index.html

There are two ways of running the Project: development mode and production mode.

To run the Project in development mode, simply open the file index.html located at the root of the Project.

To run the Project in production mode, simply open the file index.html located within the dist directory.

Of course, production mode will run the last compiled version of the Project only.


6) Quality code considerations

For the Front-End code generated, you should have into account some of the rules for performance
optimization. In particular, you should understand and apply the YSlow ruleset matrix, described
at:  http://yslow.org/ruleset-matrix/

Also, you shoud read and understand the Yahoo! BestPractices for Speeding Up Your Web Site, located
at the following url: https://developer.yahoo.com/performance/rules.html


7) Quality README considerations

The content of this file has been passed through and English spell validator to ensure its english quality.


