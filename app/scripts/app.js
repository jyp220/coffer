var resultDiv;

document.addEventListener("deviceready", init, false);
function init() {
    // document.querySelector("#startScan").addEventListener("touchend", startScan, false);
    // resultDiv = document.querySelector("#results");
}

function startScan() {
    
    cordova.plugins.barcodeScanner.scan(
        function (result) {
            var prefix = result.text.split('/');
            if(prefix.length > 1) {

              if(document.querySelector("coffer-app").page == prefix[1]) document.querySelector("coffer-app").page = '/';

              document.querySelector("coffer-app").route.path = result.text;
              document.querySelector("coffer-app").page = prefix[1];
            } else {
              document.querySelector("coffer-app #new-unit").open();
              // alert("퉤 우리꺼 아님!!!");
              // alert('aaa');
              // document.querySelector("coffer-app").route.path = '/coffer-unit-detail-list/' + result.text;
              // document.querySelector("coffer-app").page = 'coffer-unit-detail-list'
            }

            // page('/home')
            // alert("Scanning: " + result.text);
        }, 
        function (error) {
            alert("Scanning failed: " + error);
        }
    );
    
}