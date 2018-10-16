# Event Emitter
Implement an EventEmitter that supports standard operations, such as adding and removing listeners and emitting events by topic.

## Explanation:
Event emitter can have multiple events. Each event can have multiple listeners. 
```
on: enable a callback listener
emit: trigger event with some data (args for the listener), all registered listners sould be invoked
once: enable a callback listener, disable after one invokation
off: disable a specific listener
```

A simple implementation...A work in progress...
[Example for Reference](https://gist.github.com/mudge/5830382#gistcomment-2623252), using ES2015 Classes
