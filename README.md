# map-polygons
Demonstration of draggable polygons on a web-based map 

Require an API Key for the mapping service using.  For Google Map API you will have to apply a restriction on the key to HTTP referrers (websites) option to support testing from a website.  For development it is useful to explicitly list the website from which the API can be tested.  You should pick a non-standard port number for any localhost testing you perform.

For localhost testing with a Google API Key:

Logon to the Google Cloud Platform
Select API & Services
Select your API Key
Add an application restriction as HTTP referrer
Add a website restriction e.g. http://localhost/*

The website restriction list is picky on the format it accepts, although you can enter anything you want.  A value that is not accepted is likley to throw this error: Google Maps JavaScript API error: RefererNotAllowedMapError.
