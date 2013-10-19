
/**
 * JOIN plugin to emit "join" events with (nick, chan)
 *
 * @return {Function}
 * @api public
 */

module.exports = function(){
  return function(irc){
    irc.on('message', function(msg){
      if ('JOIN' != msg.command) return;
      var e = {};
      e.nick = msg.prefix.split('!')[0];
      e.channels = msg.params.split(',');
      irc.emit('join', e);
    });
  }
}