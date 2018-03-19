function FindProxyForURL(url, host) {

    if (shExpMatch(host, "*.slack-edge.com")) {        
        // Use SOCK proxy, or fall back to a DIRECT traffic.
        // ssh -D 18726 [user]@[server]
        return "SOCKS 127.0.0.1:18726; DIRECT";
    }
    
    if (shExpMatch(host, "*.slack-msgs.com")) {        
        // Use SOCK proxy, or fall back to a DIRECT traffic.
        // ssh -D 18726 [user]@[server]
        return "SOCKS 127.0.0.1:18726; DIRECT";
    }
    
    if (shExpMatch(host, "*.slack.com")) {        
        // Use SOCK proxy, or fall back to a DIRECT traffic.
        // ssh -D 18726 [user]@[server]
        return "SOCKS 127.0.0.1:18726; DIRECT";
    }

    return "DIRECT";
}
