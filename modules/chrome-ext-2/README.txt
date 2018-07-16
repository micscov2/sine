[Mandatory files required]
icon.png 
If not defined, extension might look blank, didn't try it though

manifest.json
defines everything about extension, hence mandatory

popup.html
This will be seen when someone presses on GUI icon provided
in manifest.json it is defined as browser_action -> default_popup

-- Content scripts --
These can access web page via chrome API or so

-- Background scripts --
They listen for events and they do something probably