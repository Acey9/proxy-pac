function FindProxyForURL(url, host) {

    if (shExpMatch(host, "*.slack.com")) {        
        // Use SOCK proxy, or fall back to a DIRECT traffic.
        // ssh -D 18726 [user]@[server]
        return "SOCKS 127.0.0.1:18726";
    }
    else if (isInNet(host, "52.85.159.41", "255.255.0.0")) {
        return "SOCKS 127.0.0.1:18726";
    }
    return "DIRECT";
}
