cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "call-number.CallNumber",
      "file": "plugins/call-number/www/CallNumber.js",
      "pluginId": "call-number",
      "clobbers": [
        "call"
      ]
    },
    {
      "id": "com-badrit-base64.Base64",
      "file": "plugins/com-badrit-base64/www/Base64.js",
      "pluginId": "com-badrit-base64",
      "clobbers": [
        "navigator.Base64"
      ]
    },
    {
      "id": "cordova-plugin-file.DirectoryEntry",
      "file": "plugins/cordova-plugin-file/www/DirectoryEntry.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.DirectoryEntry"
      ]
    },
    {
      "id": "cordova-plugin-file.DirectoryReader",
      "file": "plugins/cordova-plugin-file/www/DirectoryReader.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.DirectoryReader"
      ]
    },
    {
      "id": "cordova-plugin-file.Entry",
      "file": "plugins/cordova-plugin-file/www/Entry.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.Entry"
      ]
    },
    {
      "id": "cordova-plugin-file.File",
      "file": "plugins/cordova-plugin-file/www/File.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.File"
      ]
    },
    {
      "id": "cordova-plugin-file.FileEntry",
      "file": "plugins/cordova-plugin-file/www/FileEntry.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileEntry"
      ]
    },
    {
      "id": "cordova-plugin-file.FileError",
      "file": "plugins/cordova-plugin-file/www/FileError.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileError"
      ]
    },
    {
      "id": "cordova-plugin-file.FileReader",
      "file": "plugins/cordova-plugin-file/www/FileReader.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileReader"
      ]
    },
    {
      "id": "cordova-plugin-file.FileSystem",
      "file": "plugins/cordova-plugin-file/www/FileSystem.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileSystem"
      ]
    },
    {
      "id": "cordova-plugin-file.FileUploadOptions",
      "file": "plugins/cordova-plugin-file/www/FileUploadOptions.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileUploadOptions"
      ]
    },
    {
      "id": "cordova-plugin-file.FileUploadResult",
      "file": "plugins/cordova-plugin-file/www/FileUploadResult.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileUploadResult"
      ]
    },
    {
      "id": "cordova-plugin-file.FileWriter",
      "file": "plugins/cordova-plugin-file/www/FileWriter.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileWriter"
      ]
    },
    {
      "id": "cordova-plugin-file.Flags",
      "file": "plugins/cordova-plugin-file/www/Flags.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.Flags"
      ]
    },
    {
      "id": "cordova-plugin-file.LocalFileSystem",
      "file": "plugins/cordova-plugin-file/www/LocalFileSystem.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.LocalFileSystem"
      ],
      "merges": [
        "window"
      ]
    },
    {
      "id": "cordova-plugin-file.Metadata",
      "file": "plugins/cordova-plugin-file/www/Metadata.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.Metadata"
      ]
    },
    {
      "id": "cordova-plugin-file.ProgressEvent",
      "file": "plugins/cordova-plugin-file/www/ProgressEvent.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.ProgressEvent"
      ]
    },
    {
      "id": "cordova-plugin-file.fileSystems",
      "file": "plugins/cordova-plugin-file/www/fileSystems.js",
      "pluginId": "cordova-plugin-file"
    },
    {
      "id": "cordova-plugin-file.requestFileSystem",
      "file": "plugins/cordova-plugin-file/www/requestFileSystem.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.requestFileSystem"
      ]
    },
    {
      "id": "cordova-plugin-file.resolveLocalFileSystemURI",
      "file": "plugins/cordova-plugin-file/www/resolveLocalFileSystemURI.js",
      "pluginId": "cordova-plugin-file",
      "merges": [
        "window"
      ]
    },
    {
      "id": "cordova-plugin-file.isChrome",
      "file": "plugins/cordova-plugin-file/www/browser/isChrome.js",
      "pluginId": "cordova-plugin-file",
      "runs": true
    },
    {
      "id": "cordova-plugin-file.androidFileSystem",
      "file": "plugins/cordova-plugin-file/www/android/FileSystem.js",
      "pluginId": "cordova-plugin-file",
      "merges": [
        "FileSystem"
      ]
    },
    {
      "id": "cordova-plugin-file.fileSystems-roots",
      "file": "plugins/cordova-plugin-file/www/fileSystems-roots.js",
      "pluginId": "cordova-plugin-file",
      "runs": true
    },
    {
      "id": "cordova-plugin-file.fileSystemPaths",
      "file": "plugins/cordova-plugin-file/www/fileSystemPaths.js",
      "pluginId": "cordova-plugin-file",
      "merges": [
        "cordova"
      ],
      "runs": true
    },
    {
      "id": "cordova-plugin-advanced-http.cookie-handler",
      "file": "plugins/cordova-plugin-advanced-http/www/cookie-handler.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.dependency-validator",
      "file": "plugins/cordova-plugin-advanced-http/www/dependency-validator.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.error-codes",
      "file": "plugins/cordova-plugin-advanced-http/www/error-codes.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.global-configs",
      "file": "plugins/cordova-plugin-advanced-http/www/global-configs.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.helpers",
      "file": "plugins/cordova-plugin-advanced-http/www/helpers.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.js-util",
      "file": "plugins/cordova-plugin-advanced-http/www/js-util.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.local-storage-store",
      "file": "plugins/cordova-plugin-advanced-http/www/local-storage-store.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.lodash",
      "file": "plugins/cordova-plugin-advanced-http/www/lodash.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.messages",
      "file": "plugins/cordova-plugin-advanced-http/www/messages.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.ponyfills",
      "file": "plugins/cordova-plugin-advanced-http/www/ponyfills.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.public-interface",
      "file": "plugins/cordova-plugin-advanced-http/www/public-interface.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.tough-cookie",
      "file": "plugins/cordova-plugin-advanced-http/www/umd-tough-cookie.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.url-util",
      "file": "plugins/cordova-plugin-advanced-http/www/url-util.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.http",
      "file": "plugins/cordova-plugin-advanced-http/www/advanced-http.js",
      "pluginId": "cordova-plugin-advanced-http",
      "clobbers": [
        "cordova.plugin.http"
      ]
    },
    {
      "id": "cordova-plugin-camera.Camera",
      "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "Camera"
      ]
    },
    {
      "id": "cordova-plugin-camera.CameraPopoverOptions",
      "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverOptions"
      ]
    },
    {
      "id": "cordova-plugin-camera.camera",
      "file": "plugins/cordova-plugin-camera/www/Camera.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "navigator.camera"
      ]
    },
    {
      "id": "cordova-plugin-camera.CameraPopoverHandle",
      "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverHandle"
      ]
    },
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-filepath.FilePath",
      "file": "plugins/cordova-plugin-filepath/www/FilePath.js",
      "pluginId": "cordova-plugin-filepath",
      "clobbers": [
        "window.FilePath"
      ]
    },
    {
      "id": "cordova-plugin-fullscreen.AndroidFullScreen",
      "file": "plugins/cordova-plugin-fullscreen/www/AndroidFullScreen.js",
      "pluginId": "cordova-plugin-fullscreen",
      "clobbers": [
        "AndroidFullScreen"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.geolocation",
      "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
      "pluginId": "cordova-plugin-geolocation",
      "clobbers": [
        "navigator.geolocation"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.PositionError",
      "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
      "pluginId": "cordova-plugin-geolocation",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.Promise",
      "file": "plugins/cordova-plugin-googlemaps/www/Promise.js",
      "pluginId": "cordova-plugin-googlemaps"
    },
    {
      "id": "cordova-plugin-googlemaps.BaseClass",
      "file": "plugins/cordova-plugin-googlemaps/www/BaseClass.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.BaseArrayClass",
      "file": "plugins/cordova-plugin-googlemaps/www/BaseArrayClass.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.LatLng",
      "file": "plugins/cordova-plugin-googlemaps/www/LatLng.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.LatLngBounds",
      "file": "plugins/cordova-plugin-googlemaps/www/LatLngBounds.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.VisibleRegion",
      "file": "plugins/cordova-plugin-googlemaps/www/VisibleRegion.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.Location",
      "file": "plugins/cordova-plugin-googlemaps/www/Location.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.CameraPosition",
      "file": "plugins/cordova-plugin-googlemaps/www/CameraPosition.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.Polyline",
      "file": "plugins/cordova-plugin-googlemaps/www/Polyline.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.Polygon",
      "file": "plugins/cordova-plugin-googlemaps/www/Polygon.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.Marker",
      "file": "plugins/cordova-plugin-googlemaps/www/Marker.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.HtmlInfoWindow",
      "file": "plugins/cordova-plugin-googlemaps/www/HtmlInfoWindow.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.Circle",
      "file": "plugins/cordova-plugin-googlemaps/www/Circle.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.TileOverlay",
      "file": "plugins/cordova-plugin-googlemaps/www/TileOverlay.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.GroundOverlay",
      "file": "plugins/cordova-plugin-googlemaps/www/GroundOverlay.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.Common",
      "file": "plugins/cordova-plugin-googlemaps/www/Common.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.encoding",
      "file": "plugins/cordova-plugin-googlemaps/www/encoding.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.spherical",
      "file": "plugins/cordova-plugin-googlemaps/www/spherical.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.poly",
      "file": "plugins/cordova-plugin-googlemaps/www/poly.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.Geocoder",
      "file": "plugins/cordova-plugin-googlemaps/www/Geocoder.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.LocationService",
      "file": "plugins/cordova-plugin-googlemaps/www/LocationService.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.ElevationService",
      "file": "plugins/cordova-plugin-googlemaps/www/ElevationService.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.DirectionsService",
      "file": "plugins/cordova-plugin-googlemaps/www/DirectionsService.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.DirectionsRenderer",
      "file": "plugins/cordova-plugin-googlemaps/www/DirectionsRenderer.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.Map",
      "file": "plugins/cordova-plugin-googlemaps/www/Map.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.event",
      "file": "plugins/cordova-plugin-googlemaps/www/event.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.MapTypeId",
      "file": "plugins/cordova-plugin-googlemaps/www/MapTypeId.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.KmlOverlay",
      "file": "plugins/cordova-plugin-googlemaps/www/KmlOverlay.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.KmlLoader",
      "file": "plugins/cordova-plugin-googlemaps/www/KmlLoader.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.Environment",
      "file": "plugins/cordova-plugin-googlemaps/www/Environment.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.MarkerCluster",
      "file": "plugins/cordova-plugin-googlemaps/www/MarkerCluster.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.Cluster",
      "file": "plugins/cordova-plugin-googlemaps/www/Cluster.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.geomodel",
      "file": "plugins/cordova-plugin-googlemaps/www/geomodel.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.commandQueueExecutor",
      "file": "plugins/cordova-plugin-googlemaps/www/commandQueueExecutor.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.pluginInit",
      "file": "plugins/cordova-plugin-googlemaps/www/pluginInit.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.StreetViewPanorama",
      "file": "plugins/cordova-plugin-googlemaps/www/StreetViewPanorama.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.Overlay",
      "file": "plugins/cordova-plugin-googlemaps/www/Overlay.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.Thread",
      "file": "plugins/cordova-plugin-googlemaps/www/Thread.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.InlineWorker",
      "file": "plugins/cordova-plugin-googlemaps/www/InlineWorker.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-googlemaps.googlemaps-cdv-plugin",
      "file": "plugins/cordova-plugin-googlemaps/www/plugin-loader-for-android_ios.js",
      "pluginId": "cordova-plugin-googlemaps",
      "clobbers": [
        "plugin.google.maps"
      ]
    },
    {
      "id": "cordova-plugin-googlemaps.js_CordovaGoogleMaps",
      "file": "plugins/cordova-plugin-googlemaps/www/js_CordovaGoogleMaps-for-android_ios.js",
      "pluginId": "cordova-plugin-googlemaps",
      "runs": true
    },
    {
      "id": "cordova-plugin-inappbrowser.inappbrowser",
      "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
      "pluginId": "cordova-plugin-inappbrowser",
      "clobbers": [
        "cordova.InAppBrowser.open",
        "window.open"
      ]
    },
    {
      "id": "cordova-plugin-ionic-keyboard.keyboard",
      "file": "plugins/cordova-plugin-ionic-keyboard/www/android/keyboard.js",
      "pluginId": "cordova-plugin-ionic-keyboard",
      "clobbers": [
        "window.Keyboard"
      ]
    },
    {
      "id": "cordova-plugin-ionic-webview.IonicWebView",
      "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
      "pluginId": "cordova-plugin-ionic-webview",
      "clobbers": [
        "Ionic.WebView"
      ]
    },
    {
      "id": "cordova-plugin-media-capture.CaptureAudioOptions",
      "file": "plugins/cordova-plugin-media-capture/www/CaptureAudioOptions.js",
      "pluginId": "cordova-plugin-media-capture",
      "clobbers": [
        "CaptureAudioOptions"
      ]
    },
    {
      "id": "cordova-plugin-media-capture.CaptureImageOptions",
      "file": "plugins/cordova-plugin-media-capture/www/CaptureImageOptions.js",
      "pluginId": "cordova-plugin-media-capture",
      "clobbers": [
        "CaptureImageOptions"
      ]
    },
    {
      "id": "cordova-plugin-media-capture.CaptureVideoOptions",
      "file": "plugins/cordova-plugin-media-capture/www/CaptureVideoOptions.js",
      "pluginId": "cordova-plugin-media-capture",
      "clobbers": [
        "CaptureVideoOptions"
      ]
    },
    {
      "id": "cordova-plugin-media-capture.CaptureError",
      "file": "plugins/cordova-plugin-media-capture/www/CaptureError.js",
      "pluginId": "cordova-plugin-media-capture",
      "clobbers": [
        "CaptureError"
      ]
    },
    {
      "id": "cordova-plugin-media-capture.MediaFileData",
      "file": "plugins/cordova-plugin-media-capture/www/MediaFileData.js",
      "pluginId": "cordova-plugin-media-capture",
      "clobbers": [
        "MediaFileData"
      ]
    },
    {
      "id": "cordova-plugin-media-capture.MediaFile",
      "file": "plugins/cordova-plugin-media-capture/www/MediaFile.js",
      "pluginId": "cordova-plugin-media-capture",
      "clobbers": [
        "MediaFile"
      ]
    },
    {
      "id": "cordova-plugin-media-capture.helpers",
      "file": "plugins/cordova-plugin-media-capture/www/helpers.js",
      "pluginId": "cordova-plugin-media-capture",
      "runs": true
    },
    {
      "id": "cordova-plugin-media-capture.capture",
      "file": "plugins/cordova-plugin-media-capture/www/capture.js",
      "pluginId": "cordova-plugin-media-capture",
      "clobbers": [
        "navigator.device.capture"
      ]
    },
    {
      "id": "cordova-plugin-media-capture.init",
      "file": "plugins/cordova-plugin-media-capture/www/android/init.js",
      "pluginId": "cordova-plugin-media-capture",
      "runs": true
    },
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "cordova-plugin-statusbar.statusbar",
      "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
      "pluginId": "cordova-plugin-statusbar",
      "clobbers": [
        "window.StatusBar"
      ]
    },
    {
      "id": "es6-promise-plugin.Promise",
      "file": "plugins/es6-promise-plugin/www/promise.js",
      "pluginId": "es6-promise-plugin",
      "runs": true
    },
    {
      "id": "cordova-plugin-x-socialsharing.SocialSharing",
      "file": "plugins/cordova-plugin-x-socialsharing/www/SocialSharing.js",
      "pluginId": "cordova-plugin-x-socialsharing",
      "clobbers": [
        "window.plugins.socialsharing"
      ]
    },
    {
      "id": "cordova-sqlite-storage.SQLitePlugin",
      "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
      "pluginId": "cordova-sqlite-storage",
      "clobbers": [
        "SQLitePlugin"
      ]
    },
    {
      "id": "onesignal-cordova-plugin.OneSignal",
      "file": "plugins/onesignal-cordova-plugin/www/OneSignal.js",
      "pluginId": "onesignal-cordova-plugin",
      "clobbers": [
        "OneSignal"
      ]
    },
    {
      "id": "cordova-plugin-background-mode.BackgroundMode",
      "file": "plugins/cordova-plugin-background-mode/www/background-mode.js",
      "pluginId": "cordova-plugin-background-mode",
      "clobbers": [
        "cordova.plugins.backgroundMode",
        "plugin.backgroundMode"
      ]
    },
    {
      "id": "cordova-plugin-insomnia.Insomnia",
      "file": "plugins/cordova-plugin-insomnia/www/Insomnia.js",
      "pluginId": "cordova-plugin-insomnia",
      "clobbers": [
        "window.plugins.insomnia"
      ]
    },
    {
      "id": "cordova-plugin-actionsheet.ActionSheet",
      "file": "plugins/cordova-plugin-actionsheet/www/ActionSheet.js",
      "pluginId": "cordova-plugin-actionsheet",
      "clobbers": [
        "window.plugins.actionsheet"
      ]
    },
    {
      "id": "cordova-plugin-dialogs.notification",
      "file": "plugins/cordova-plugin-dialogs/www/notification.js",
      "pluginId": "cordova-plugin-dialogs",
      "merges": [
        "navigator.notification"
      ]
    },
    {
      "id": "cordova-plugin-dialogs.notification_android",
      "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
      "pluginId": "cordova-plugin-dialogs",
      "merges": [
        "navigator.notification"
      ]
    },
    {
      "id": "uk.co.workingedge.phonegap.plugin.launchnavigator.Common",
      "file": "plugins/uk.co.workingedge.phonegap.plugin.launchnavigator/www/common.js",
      "pluginId": "uk.co.workingedge.phonegap.plugin.launchnavigator",
      "clobbers": [
        "launchnavigator"
      ]
    },
    {
      "id": "uk.co.workingedge.phonegap.plugin.launchnavigator.LocalForage",
      "file": "plugins/uk.co.workingedge.phonegap.plugin.launchnavigator/www/localforage.v1.5.0.min.js",
      "pluginId": "uk.co.workingedge.phonegap.plugin.launchnavigator",
      "clobbers": [
        "localforage"
      ]
    },
    {
      "id": "uk.co.workingedge.phonegap.plugin.launchnavigator.LaunchNavigator",
      "file": "plugins/uk.co.workingedge.phonegap.plugin.launchnavigator/www/android/launchnavigator.js",
      "pluginId": "uk.co.workingedge.phonegap.plugin.launchnavigator",
      "merges": [
        "launchnavigator"
      ]
    },
    {
      "id": "cordova-plugin-foreground-service.ForegroundService",
      "file": "plugins/cordova-plugin-foreground-service/www/foreground.js",
      "pluginId": "cordova-plugin-foreground-service",
      "clobbers": [
        "cordova.plugins.foregroundService"
      ]
    }
  ];
  module.exports.metadata = {
    "call-number": "0.0.2",
    "com-badrit-base64": "0.2.0",
    "cordova-android-play-services-gradle-release": "2.1.0",
    "cordova-androidx-build": "1.0.4",
    "cordova-plugin-file": "6.0.2",
    "cordova-plugin-advanced-http": "2.5.1",
    "cordova-plugin-androidx": "1.0.2",
    "cordova-plugin-androidx-adapter": "1.1.3",
    "cordova-plugin-camera": "4.1.0",
    "cordova-plugin-device": "2.0.3",
    "cordova-plugin-filepath": "1.6.0",
    "cordova-plugin-fullscreen": "1.3.0",
    "cordova-plugin-geolocation": "4.1.0",
    "cordova-plugin-googlemaps": "2.8.0-20200709-2008",
    "cordova-plugin-inappbrowser": "3.2.0",
    "cordova-plugin-ionic-keyboard": "2.2.0",
    "cordova-plugin-ionic-webview": "4.2.1",
    "cordova-plugin-media-capture": "3.0.3",
    "cordova-plugin-splashscreen": "5.0.2",
    "cordova-plugin-statusbar": "2.4.3",
    "cordova-plugin-vibration": "3.1.1",
    "cordova-plugin-whitelist": "1.3.3",
    "es6-promise-plugin": "4.2.2",
    "cordova-plugin-x-socialsharing": "5.6.8",
    "cordova-sqlite-storage": "3.4.1",
    "onesignal-cordova-plugin": "2.11.4",
    "cordova-plugin-background-mode": "0.7.3",
    "cordova-plugin-insomnia": "4.3.0",
    "cordova-plugin-actionsheet": "2.3.3",
    "cordova-plugin-dialogs": "2.0.2",
    "uk.co.workingedge.phonegap.plugin.launchnavigator": "5.0.6",
    "cordova-plugin-foreground-service": "1.1.3"
  };
});