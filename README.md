# State Management with Zustand

Demo using the Zustand library.

Zustand is a very simplified central state solution which you can use instead of Context.

It does not use a provider that you need to wrap around your components.

Zustand provides kind of a "global object" that you can access from anywhere.

Additionally it has the big advantage over React Context, that it does not trigger unnecessary re-renders whenever something in the Context changes. State Changes in Zustand will, similar to Redux, only trigger re-renders in components that are subscribed to a certain state from the store.

Enjoy :D