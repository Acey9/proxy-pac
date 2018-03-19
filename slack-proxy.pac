function FindProxyForURL(url, host) {

    if (shExpMatch(host, "*.slack.com")) {        
        return "SOCKS 127.0.0.1:18726";
    }
    else if (shExpMatch(host, "*.slack-edge.com")) {
        return "SOCKS 127.0.0.1:18726";
    }
    else if (shExpMatch(host, "*.slack-imgs.com")) {
        return "SOCKS 127.0.0.1:18726";
    }
    return "DIRECT";
}
