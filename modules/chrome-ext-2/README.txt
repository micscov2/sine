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


[NOTES]
Plugins vs extensions
Plugin run outside the sandbox of browser environment, but extension inside
Adobe flash player, PDF viewer are plugins example

Capabilities of chrome extensions
Can interact with servers
Modify currently loaded pages
Possibility to load DLLs

Chrome APIs
history
downloads
events

