var proxy = "SOCKS5 127.0.0.1:18726;";

var domains = {
  "slack.com": 1, 
  "slack-msgs.com": 1, 
  "slack-files.com": 1,
  "slack-imgs.com": 1,
  "slack-edge.com": 1,
  "slack-core.com": 1,
  "slack-redir.net": 1,
};

var direct = 'DIRECT;';

var hasOwnProperty = Object.hasOwnProperty;

function FindProxyForURL(url, host) {
    var suffix;
    var pos = host.lastIndexOf('.');
    pos = host.lastIndexOf('.', pos - 1);
    while(1) {
        if (pos <= 0) {
            if (hasOwnProperty.call(domains, host)) {
                return proxy;
            } else {
                return direct;
            }
        }
        suffix = host.substring(pos + 1);
        if (hasOwnProperty.call(domains, suffix)) {
            return proxy;
        }
        pos = host.lastIndexOf('.', pos - 1);
    }
}
