cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/cordova-plugin-statusbar/src/browser/StatusBarProxy.js",
        "id": "cordova-plugin-statusbar.StatusBarProxy",
        "pluginId": "cordova-plugin-statusbar",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/src/browser/DeviceProxy.js",
        "id": "cordova-plugin-device.DeviceProxy",
        "pluginId": "cordova-plugin-device",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/src/browser/SplashScreenProxy.js",
        "id": "cordova-plugin-splashscreen.SplashScreenProxy",
        "pluginId": "cordova-plugin-splashscreen",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
        "id": "cordova-plugin-ionic-webview.IonicWebView",
        "pluginId": "cordova-plugin-ionic-webview",
        "clobbers": [
            "Ionic.WebView"
        ]
    },
    {
        "file": "plugins/onesignal-cordova-plugin/www/OneSignal.js",
        "id": "onesignal-cordova-plugin.OneSignal",
        "pluginId": "onesignal-cordova-plugin",
        "clobbers": [
            "OneSignal"
        ]
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/src/browser/InAppBrowserProxy.js",
        "id": "cordova-plugin-inappbrowser.InAppBrowserProxy",
        "pluginId": "cordova-plugin-inappbrowser",
        "runs": true
    },
    {
        "file": "plugins/call-number/www/CallNumber.js",
        "id": "call-number.CallNumber",
        "pluginId": "call-number",
        "clobbers": [
            "call"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/DirectoryEntry.js",
        "id": "cordova-plugin-file.DirectoryEntry",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.DirectoryEntry"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/DirectoryReader.js",
        "id": "cordova-plugin-file.DirectoryReader",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.DirectoryReader"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/Entry.js",
        "id": "cordova-plugin-file.Entry",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.Entry"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/File.js",
        "id": "cordova-plugin-file.File",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.File"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileEntry.js",
        "id": "cordova-plugin-file.FileEntry",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileEntry"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileError.js",
        "id": "cordova-plugin-file.FileError",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileError"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileReader.js",
        "id": "cordova-plugin-file.FileReader",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileReader"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileSystem.js",
        "id": "cordova-plugin-file.FileSystem",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileSystem"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileUploadOptions.js",
        "id": "cordova-plugin-file.FileUploadOptions",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileUploadOptions"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileUploadResult.js",
        "id": "cordova-plugin-file.FileUploadResult",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileUploadResult"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileWriter.js",
        "id": "cordova-plugin-file.FileWriter",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileWriter"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/Flags.js",
        "id": "cordova-plugin-file.Flags",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.Flags"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/LocalFileSystem.js",
        "id": "cordova-plugin-file.LocalFileSystem",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.LocalFileSystem"
        ],
        "merges": [
            "window"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/Metadata.js",
        "id": "cordova-plugin-file.Metadata",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.Metadata"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/ProgressEvent.js",
        "id": "cordova-plugin-file.ProgressEvent",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.ProgressEvent"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/fileSystems.js",
        "id": "cordova-plugin-file.fileSystems",
        "pluginId": "cordova-plugin-file"
    },
    {
        "file": "plugins/cordova-plugin-file/www/requestFileSystem.js",
        "id": "cordova-plugin-file.requestFileSystem",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.requestFileSystem"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/resolveLocalFileSystemURI.js",
        "id": "cordova-plugin-file.resolveLocalFileSystemURI",
        "pluginId": "cordova-plugin-file",
        "merges": [
            "window"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/browser/isChrome.js",
        "id": "cordova-plugin-file.isChrome",
        "pluginId": "cordova-plugin-file",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-file/www/browser/Preparing.js",
        "id": "cordova-plugin-file.Preparing",
        "pluginId": "cordova-plugin-file",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-file/src/browser/FileProxy.js",
        "id": "cordova-plugin-file.browserFileProxy",
        "pluginId": "cordova-plugin-file",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-file/www/fileSystemPaths.js",
        "id": "cordova-plugin-file.fileSystemPaths",
        "pluginId": "cordova-plugin-file",
        "merges": [
            "cordova"
        ],
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-file/www/browser/FileSystem.js",
        "id": "cordova-plugin-file.firefoxFileSystem",
        "pluginId": "cordova-plugin-file",
        "merges": [
            "window.FileSystem"
        ]
    },
    {
        "file": "plugins/cordova-plugin-advanced-http/www/cookie-handler.js",
        "id": "cordova-plugin-advanced-http.cookie-handler",
        "pluginId": "cordova-plugin-advanced-http"
    },
    {
        "file": "plugins/cordova-plugin-advanced-http/www/dependency-validator.js",
        "id": "cordova-plugin-advanced-http.dependency-validator",
        "pluginId": "cordova-plugin-advanced-http"
    },
    {
        "file": "plugins/cordova-plugin-advanced-http/www/error-codes.js",
        "id": "cordova-plugin-advanced-http.error-codes",
        "pluginId": "cordova-plugin-advanced-http"
    },
    {
        "file": "plugins/cordova-plugin-advanced-http/www/global-configs.js",
        "id": "cordova-plugin-advanced-http.global-configs",
        "pluginId": "cordova-plugin-advanced-http"
    },
    {
        "file": "plugins/cordova-plugin-advanced-http/www/helpers.js",
        "id": "cordova-plugin-advanced-http.helpers",
        "pluginId": "cordova-plugin-advanced-http"
    },
    {
        "file": "plugins/cordova-plugin-advanced-http/www/js-util.js",
        "id": "cordova-plugin-advanced-http.js-util",
        "pluginId": "cordova-plugin-advanced-http"
    },
    {
        "file": "plugins/cordova-plugin-advanced-http/www/local-storage-store.js",
        "id": "cordova-plugin-advanced-http.local-storage-store",
        "pluginId": "cordova-plugin-advanced-http"
    },
    {
        "file": "plugins/cordova-plugin-advanced-http/www/lodash.js",
        "id": "cordova-plugin-advanced-http.lodash",
        "pluginId": "cordova-plugin-advanced-http"
    },
    {
        "file": "plugins/cordova-plugin-advanced-http/www/messages.js",
        "id": "cordova-plugin-advanced-http.messages",
        "pluginId": "cordova-plugin-advanced-http"
    },
    {
        "file": "plugins/cordova-plugin-advanced-http/www/ponyfills.js",
        "id": "cordova-plugin-advanced-http.ponyfills",
        "pluginId": "cordova-plugin-advanced-http"
    },
    {
        "file": "plugins/cordova-plugin-advanced-http/www/public-interface.js",
        "id": "cordova-plugin-advanced-http.public-interface",
        "pluginId": "cordova-plugin-advanced-http"
    },
    {
        "file": "plugins/cordova-plugin-advanced-http/www/umd-tough-cookie.js",
        "id": "cordova-plugin-advanced-http.tough-cookie",
        "pluginId": "cordova-plugin-advanced-http"
    },
    {
        "file": "plugins/cordova-plugin-advanced-http/www/url-util.js",
        "id": "cordova-plugin-advanced-http.url-util",
        "pluginId": "cordova-plugin-advanced-http"
    },
    {
        "file": "plugins/cordova-plugin-advanced-http/www/advanced-http.js",
        "id": "cordova-plugin-advanced-http.http",
        "pluginId": "cordova-plugin-advanced-http",
        "clobbers": [
            "cordova.plugin.http"
        ]
    },
    {
        "file": "plugins/cordova-plugin-advanced-http/src/browser/cordova-http-plugin.js",
        "id": "cordova-plugin-advanced-http.http-proxy",
        "pluginId": "cordova-plugin-advanced-http",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/Promise.js",
        "id": "cordova-plugin-googlemaps.Promise",
        "pluginId": "cordova-plugin-googlemaps"
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/BaseClass.js",
        "id": "cordova-plugin-googlemaps.BaseClass",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/BaseArrayClass.js",
        "id": "cordova-plugin-googlemaps.BaseArrayClass",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/LatLng.js",
        "id": "cordova-plugin-googlemaps.LatLng",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/LatLngBounds.js",
        "id": "cordova-plugin-googlemaps.LatLngBounds",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/VisibleRegion.js",
        "id": "cordova-plugin-googlemaps.VisibleRegion",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/Location.js",
        "id": "cordova-plugin-googlemaps.Location",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/CameraPosition.js",
        "id": "cordova-plugin-googlemaps.CameraPosition",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/Polyline.js",
        "id": "cordova-plugin-googlemaps.Polyline",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/Polygon.js",
        "id": "cordova-plugin-googlemaps.Polygon",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/Marker.js",
        "id": "cordova-plugin-googlemaps.Marker",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/HtmlInfoWindow.js",
        "id": "cordova-plugin-googlemaps.HtmlInfoWindow",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/Circle.js",
        "id": "cordova-plugin-googlemaps.Circle",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/TileOverlay.js",
        "id": "cordova-plugin-googlemaps.TileOverlay",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/GroundOverlay.js",
        "id": "cordova-plugin-googlemaps.GroundOverlay",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/Common.js",
        "id": "cordova-plugin-googlemaps.Common",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/encoding.js",
        "id": "cordova-plugin-googlemaps.encoding",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/spherical.js",
        "id": "cordova-plugin-googlemaps.spherical",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/poly.js",
        "id": "cordova-plugin-googlemaps.poly",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/Geocoder.js",
        "id": "cordova-plugin-googlemaps.Geocoder",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/LocationService.js",
        "id": "cordova-plugin-googlemaps.LocationService",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/ElevationService.js",
        "id": "cordova-plugin-googlemaps.ElevationService",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/DirectionsService.js",
        "id": "cordova-plugin-googlemaps.DirectionsService",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/DirectionsRenderer.js",
        "id": "cordova-plugin-googlemaps.DirectionsRenderer",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/Map.js",
        "id": "cordova-plugin-googlemaps.Map",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/event.js",
        "id": "cordova-plugin-googlemaps.event",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/MapTypeId.js",
        "id": "cordova-plugin-googlemaps.MapTypeId",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/KmlOverlay.js",
        "id": "cordova-plugin-googlemaps.KmlOverlay",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/KmlLoader.js",
        "id": "cordova-plugin-googlemaps.KmlLoader",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/Environment.js",
        "id": "cordova-plugin-googlemaps.Environment",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/MarkerCluster.js",
        "id": "cordova-plugin-googlemaps.MarkerCluster",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/Cluster.js",
        "id": "cordova-plugin-googlemaps.Cluster",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/geomodel.js",
        "id": "cordova-plugin-googlemaps.geomodel",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/commandQueueExecutor.js",
        "id": "cordova-plugin-googlemaps.commandQueueExecutor",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/pluginInit.js",
        "id": "cordova-plugin-googlemaps.pluginInit",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/StreetViewPanorama.js",
        "id": "cordova-plugin-googlemaps.StreetViewPanorama",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/Overlay.js",
        "id": "cordova-plugin-googlemaps.Overlay",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/Thread.js",
        "id": "cordova-plugin-googlemaps.Thread",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/InlineWorker.js",
        "id": "cordova-plugin-googlemaps.InlineWorker",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/plugin-loader-for-browser.js",
        "id": "cordova-plugin-googlemaps.googlemaps-cdv-plugin",
        "pluginId": "cordova-plugin-googlemaps",
        "clobbers": [
            "plugin.google.maps"
        ]
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/www/js_CordovaGoogleMaps-for-browser.js",
        "id": "cordova-plugin-googlemaps.js_CordovaGoogleMaps",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/src/browser/CordovaGoogleMaps.js",
        "id": "cordova-plugin-googlemaps.CordovaGoogleMaps",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/src/browser/PluginMap.js",
        "id": "cordova-plugin-googlemaps.PluginMap",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/src/browser/PluginMarker.js",
        "id": "cordova-plugin-googlemaps.PluginMarker",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/src/browser/PluginCircle.js",
        "id": "cordova-plugin-googlemaps.PluginCircle",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/src/browser/PluginGroundOverlay.js",
        "id": "cordova-plugin-googlemaps.PluginGroundOverlay",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/src/browser/PluginKmlOverlay.js",
        "id": "cordova-plugin-googlemaps.PluginKmlOverlay",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/src/browser/PluginMarkerCluster.js",
        "id": "cordova-plugin-googlemaps.PluginMarkerCluster",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/src/browser/PluginPolygon.js",
        "id": "cordova-plugin-googlemaps.PluginPolygon",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/src/browser/PluginPolyline.js",
        "id": "cordova-plugin-googlemaps.PluginPolyline",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/src/browser/PluginStreetViewPanorama.js",
        "id": "cordova-plugin-googlemaps.PluginStreetViewPanorama",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/src/browser/PluginTileOverlay.js",
        "id": "cordova-plugin-googlemaps.PluginTileOverlay",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/src/browser/PluginLocationService.js",
        "id": "cordova-plugin-googlemaps.PluginLocationService",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/src/browser/PluginElevationService.js",
        "id": "cordova-plugin-googlemaps.PluginElevationService",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/src/browser/PluginDirectionsService.js",
        "id": "cordova-plugin-googlemaps.PluginDirectionsService",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/src/browser/PluginGeocoder.js",
        "id": "cordova-plugin-googlemaps.PluginGeocoder",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-googlemaps/src/browser/PluginEnvironment.js",
        "id": "cordova-plugin-googlemaps.PluginEnvironment",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
        "id": "cordova-sqlite-storage.SQLitePlugin",
        "pluginId": "cordova-sqlite-storage",
        "clobbers": [
            "SQLitePlugin"
        ]
    },
    {
        "file": "plugins/es6-promise-plugin/www/promise.js",
        "id": "es6-promise-plugin.Promise",
        "pluginId": "es6-promise-plugin",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-x-socialsharing/www/SocialSharing.js",
        "id": "cordova-plugin-x-socialsharing.SocialSharing",
        "pluginId": "cordova-plugin-x-socialsharing",
        "clobbers": [
            "window.plugins.socialsharing"
        ]
    },
    {
        "file": "plugins/cordova-plugin-vibration/src/browser/Vibration.js",
        "id": "cordova-plugin-vibration.Vibration",
        "pluginId": "cordova-plugin-vibration",
        "merges": [
            "navigator"
        ]
    },
    {
        "file": "plugins/cordova-plugin-vibration/www/vibration.js",
        "id": "cordova-plugin-vibration.notification",
        "pluginId": "cordova-plugin-vibration",
        "merges": [
            "navigator"
        ]
    },
    {
        "file": "plugins/com-badrit-base64/www/Base64.js",
        "id": "com-badrit-base64.Base64",
        "pluginId": "com-badrit-base64",
        "clobbers": [
            "navigator.Base64"
        ]
    },
    {
        "file": "plugins/cordova-plugin-media-capture/www/CaptureAudioOptions.js",
        "id": "cordova-plugin-media-capture.CaptureAudioOptions",
        "pluginId": "cordova-plugin-media-capture",
        "clobbers": [
            "CaptureAudioOptions"
        ]
    },
    {
        "file": "plugins/cordova-plugin-media-capture/www/CaptureImageOptions.js",
        "id": "cordova-plugin-media-capture.CaptureImageOptions",
        "pluginId": "cordova-plugin-media-capture",
        "clobbers": [
            "CaptureImageOptions"
        ]
    },
    {
        "file": "plugins/cordova-plugin-media-capture/www/CaptureVideoOptions.js",
        "id": "cordova-plugin-media-capture.CaptureVideoOptions",
        "pluginId": "cordova-plugin-media-capture",
        "clobbers": [
            "CaptureVideoOptions"
        ]
    },
    {
        "file": "plugins/cordova-plugin-media-capture/www/CaptureError.js",
        "id": "cordova-plugin-media-capture.CaptureError",
        "pluginId": "cordova-plugin-media-capture",
        "clobbers": [
            "CaptureError"
        ]
    },
    {
        "file": "plugins/cordova-plugin-media-capture/www/MediaFileData.js",
        "id": "cordova-plugin-media-capture.MediaFileData",
        "pluginId": "cordova-plugin-media-capture",
        "clobbers": [
            "MediaFileData"
        ]
    },
    {
        "file": "plugins/cordova-plugin-media-capture/www/MediaFile.js",
        "id": "cordova-plugin-media-capture.MediaFile",
        "pluginId": "cordova-plugin-media-capture",
        "clobbers": [
            "MediaFile"
        ]
    },
    {
        "file": "plugins/cordova-plugin-media-capture/www/helpers.js",
        "id": "cordova-plugin-media-capture.helpers",
        "pluginId": "cordova-plugin-media-capture",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-media-capture/www/capture.js",
        "id": "cordova-plugin-media-capture.capture",
        "pluginId": "cordova-plugin-media-capture",
        "clobbers": [
            "navigator.device.capture"
        ]
    },
    {
        "file": "plugins/cordova-plugin-media-capture/src/browser/CaptureProxy.js",
        "id": "cordova-plugin-media-capture.CaptureProxy",
        "pluginId": "cordova-plugin-media-capture",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
        "id": "cordova-plugin-camera.Camera",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "Camera"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
        "id": "cordova-plugin-camera.CameraPopoverOptions",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "CameraPopoverOptions"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/www/Camera.js",
        "id": "cordova-plugin-camera.camera",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "navigator.camera"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/src/browser/CameraProxy.js",
        "id": "cordova-plugin-camera.CameraProxy",
        "pluginId": "cordova-plugin-camera",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-fullscreen/www/AndroidFullScreen.js",
        "id": "cordova-plugin-fullscreen.AndroidFullScreen",
        "pluginId": "cordova-plugin-fullscreen",
        "clobbers": [
            "AndroidFullScreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-background-mode/www/background-mode.js",
        "id": "cordova-plugin-background-mode.BackgroundMode",
        "pluginId": "cordova-plugin-background-mode",
        "clobbers": [
            "cordova.plugins.backgroundMode",
            "plugin.backgroundMode"
        ]
    },
    {
        "file": "plugins/cordova-plugin-background-mode/src/browser/BackgroundModeProxy.js",
        "id": "cordova-plugin-background-mode.BackgroundMode.Proxy",
        "pluginId": "cordova-plugin-background-mode",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-insomnia/www/Insomnia.js",
        "id": "cordova-plugin-insomnia.Insomnia",
        "pluginId": "cordova-plugin-insomnia",
        "clobbers": [
            "window.plugins.insomnia"
        ]
    },
    {
        "file": "plugins/cordova-plugin-insomnia/src/browser/Insomnia.js",
        "id": "cordova-plugin-insomnia.InsomniaProxy",
        "pluginId": "cordova-plugin-insomnia",
        "merges": [
            "window.plugins.insomnia"
        ]
    },
    {
        "file": "plugins/uk.co.workingedge.phonegap.plugin.launchnavigator/www/common.js",
        "id": "uk.co.workingedge.phonegap.plugin.launchnavigator.Common",
        "pluginId": "uk.co.workingedge.phonegap.plugin.launchnavigator",
        "clobbers": [
            "launchnavigator"
        ]
    },
    {
        "file": "plugins/uk.co.workingedge.phonegap.plugin.launchnavigator/www/localforage.v1.5.0.min.js",
        "id": "uk.co.workingedge.phonegap.plugin.launchnavigator.LocalForage",
        "pluginId": "uk.co.workingedge.phonegap.plugin.launchnavigator",
        "clobbers": [
            "localforage"
        ]
    },
    {
        "file": "plugins/cordova-plugin-foreground-service/www/foreground.js",
        "id": "cordova-plugin-foreground-service.ForegroundService",
        "pluginId": "cordova-plugin-foreground-service",
        "clobbers": [
            "cordova.plugins.foregroundService"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-statusbar": "2.4.3",
    "cordova-plugin-device": "2.0.3",
    "cordova-plugin-splashscreen": "5.0.2",
    "cordova-plugin-ionic-webview": "4.2.1",
    "cordova-plugin-ionic-keyboard": "2.2.0",
    "onesignal-cordova-plugin": "2.11.4",
    "cordova-plugin-inappbrowser": "3.2.0",
    "call-number": "0.0.2",
    "cordova-plugin-file": "6.0.2",
    "cordova-plugin-advanced-http": "2.5.1",
    "cordova-plugin-googlemaps": "2.8.0-20200709-2008",
    "cordova-sqlite-storage": "3.4.1",
    "cordova-plugin-filepath": "1.6.0",
    "es6-promise-plugin": "4.2.2",
    "cordova-plugin-x-socialsharing": "5.6.8",
    "cordova-plugin-vibration": "3.1.1",
    "cordova-plugin-androidx": "1.0.2",
    "cordova-plugin-androidx-adapter": "1.1.3",
    "com-badrit-base64": "0.2.0",
    "cordova-plugin-media-capture": "3.0.3",
    "cordova-plugin-camera": "4.1.0",
    "cordova-android-play-services-gradle-release": "2.1.0",
    "cordova-plugin-fullscreen": "1.3.0",
    "cordova-plugin-geolocation": "4.1.0",
    "cordova-plugin-background-mode": "0.7.3",
    "cordova-plugin-insomnia": "4.3.0",
    "uk.co.workingedge.phonegap.plugin.launchnavigator": "5.0.6",
    "cordova-plugin-foreground-service": "1.1.3"
}
// BOTTOM OF METADATA
});