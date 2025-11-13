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