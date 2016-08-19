# jQuery Plugins

## What are they and why do we use to them?
According to [jQuery's website](https://learn.jquery.com/plugins/): A jQuery plugin is a new method to extend jQuery's prototype object. In doing so, you allow for all jQuery objects you add to inherit those same methods. It allows you to do something with a collection of elements.

In short jQuery plugins use jQuery's abilities and functions to add interactive features to a website.

Many plugins have already been created and just need to be installed.


## How do we install them?

There are various places to look to find a plug in.
* Google the type of functionality you are looking for to find the plugin you want.
* [jQuery's Plugin Registry](http://plugins.jquery.com/), can also be used to search through categories of the type of plugin you would like.

While searching for a plugin it is important to read through reviews and forums to understand whether the plugin is right for the specific feature you are trying to implement.

Each plugin has their own documentation on how to install and use the plugin, so it is important to read them before installing.

Let's go through one that will allow us to have a before and after effect on an image.

### [**twentytwenty**](http://zurb.com/playground/twentytwenty)
* [Github info](https://github.com/zurb/twentytwenty)
* [Example Code](Example/twentyExampleCode.html)

We start by putting in the proper css links if any, in the example with twentytwenty, they have two stylesheets. At the bottom of the body we include any relevant script tags, but since this is a jQuery plugin, we must add that script tag jQuery first.
```
<!DOCTYPE html>
<html>
    <head>
        <meta charset='utf-8'>
        <title>twentytwenty example</title>
        <link href='twentytwenty-master/css/foundation.css' rel='stylesheet' type='text/css'>
        <link href='twentytwenty-master/css/twentytwenty.css' rel='stylesheet' type='text/css'>
        <link href='exampleStyle.css' rel='stylesheet' type='text/css'>
    </head>
    <body>
        <header>
            <h1>twentytwenty example</h1>
        </header>

        <main class='images'>
            <h3>Default Styling</h3>
            <section id='container1'>
                <img src='img/bourbon.jpg'>
                <img src='img/bourbon2.jpg'>
            </section>
            <h3>Changing Offset Styling</h3>
            <section id='container2'>
                <img src='img/bourbon.jpg'>
                <img src='img/bourbon2.jpg'>
            </section>
            <h3>Changing Orientation Styling</h3>
            <section id='container3'>
                <img src='img/bourbon.jpg'>
                <img src='img/bourbon2.jpg'>
            </section>
        </main>

        <script src='http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js'></script>
        <script src='twentytwenty-master/js/jquery.event.move.js'></script>
        <script src='twentytwenty-master/js/jquery.twentytwenty.js'></script>
        <script src='twentyExampleCode.js'></script>
    </body>
</html>
```

Once we have our html laid out, we can apply the functionality using javascript.
```
$(window).load(function(){
    $('#container1').twentytwenty();
    $('#container2').twentytwenty({
        default_offset_pct: 0.8
    });
    $('#container3').twentytwenty({
        orientation: 'vertical'
    });
});
```

## How do we use them?
Reading the documentation is key, some plugins are easier to understand what is required than others. Some plugins have very simple functionality while others may be more complex.
For example, with twentytwenty, after adding the script tags for jQuery and twentytwenty, all you have to do is add attributes on your images: `class='#container3 data-orientation='vertical'`. Or to properly separate your html from the javascript, set the orientation and offset in the javascript file. `$('#container3').twentytwenty({orientation: 'vertical'});`.

## How do we create them?

Start with `$.fn` which allows us to create function that has access to all the method inside the jQuery object.
Then create the name of the plugin you are creating `contrast`. My plugin will take text and give it a contrast color, black background with a white font. It is just like creating a constructor function.

```
$.fn.contrast = function() {
   this.css({
       'color': '#fff',
       'background-color': '#000',
       'font-style': 'italic',
       'padding': '1em',
       'text-align': 'center'
   });
   return this;
};

$('.myPlugin').contrast();
```
