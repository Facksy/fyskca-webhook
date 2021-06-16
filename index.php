<script>
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", 'http://localhost:8000', false ); // false for synchronous request
    xmlHttp.send( null );
    alert(xmlHttp.responseText);
    alert('done')
}
</script>

<?php
    echo "Hellow <button onclick='httpGet()'>Test</button>";
?>
