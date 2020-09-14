const http = require( 'http' );

http
    .createServer( function ( req, res ) {
    
    if (req.url === "/OK") {
        res.writeHead(200, {
            "Content-Type": "text/html"} );
        res.write("<h1>OK</h1>")
        res.end();
    }

    //if also works with code numbers
    if ( req.url === "/Created" ) {
        res.writeHead(201, {
            "Content-Type": "text/html"
        } );
        res.write( "<h1>Created</h1>" );
        res.end();
    }

    if ( req.url === "/Bad-Request" ) {
        res.writeHead(400, {
            "Content-Type": "text/html"
        } );
        res.write( "<h1>Bad Request</h1>" );
        res.end();
    }

    if ( req.url === "/Forbidden" ) {
        res.writeHead(403, {
            "Content-Type": "text/html"
        });
        res.write( "<h1>Forbidden</h1>" );
        res.end();
    }

    if ( req.url === "/Gateway-Timeout" ) {
        res.writeHead(504, {
            "Content-Type": "text/html"
        } );
        res.write( "<h1>Gateway Timeout</h1>" );
        res.end();
    }

    if ( req.url === "/Internal-Service-Error" ) {
        res.writeHead(500, {
            "Content-Type": "text/html"
        } );
        res.write( "<h1>Internal Service Error</h1>" );
        res.end();
    }

    if ( req.url === "/Moved-Permanently" ) {
        res.writeHead(301, {
            "Content-Type": "text/html"
        } );
        res.write( "<h1>Moved Permanently</h1>" );
        res.end();
    }

    if ( req.url === "/Unauthorized" ) {
        res.writeHead(401, {
            "Content-Type": "text/html"
        } );
        res.write( "<h1>Unauthorized</h1>" );
        res.end();
    }

})

.listen( 3000, function () {
    console.log( "listening for port 3000" );
});