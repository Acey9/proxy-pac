function FindProxyForURL(url, host) {

    if (shExpMatch(host, "*.com")) {        
        return "SOCKS5 127.0.0.1:18726";
    }
    return "DIRECT";
}
