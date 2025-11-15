# Create component

## Overview

Create a 

## File structure

Keep the component in its own directory under `src/components`.
For each component, there have to be the following files:

- <component>.tsx
- index.ts
- <component>.stories.tsx
- <component>.modules.css

## Codestyle

Follow the codestyle similar to already implemented components

## Functionality

Build the components on top of RadixUI but style them in our own way.

## Styles

Provide little styles. The components should be styled but not too much.

## Tokens

In CSS, use existing tokens from `src/tokens`. Don't use primitives, only component-level tokens or semantic tokens. If there is no needed tokens available, create them without breaking the current system.

## Writing Stories

Create a `<component>.stories.tsx` file for the new component.

Use meta to define the file. For example, for Avatar it was `const meta: Meta<typeof Avatar> = {`.

Don't use `argTypes` to describe the properties. Ensure that the options, defaults and descriptions come from JsDoc in the component file.

If component has parameters, the first story should be named `Controls`. It should pass `args`. Children are passed via `args` too.