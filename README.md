# React Utils Component
## Motivation
This project is inspired by [solidjs](https://www.solidjs.com/) and [vuejs](https://vuejs.org/).

## Install Package

```bash
$ npm install react-utils-component
```

```bash
$ yarn add react-utils-component
```

<br />

## Usage

### `Show`
Component for conditional rendering.

#### `ShowProps`
Props|Type|Description
---|---|---
`when`|`boolean`|Conditions to be used for conditional rendering.
`fallback`|`JSX.Element \| undefined`|Render when the condition is `false`.
`children`|`ReactNode`|Render when the condition is `true`.

<br />

### `Switch-Match`
This component is useful when there are multiple conditions like `switch-case`.

#### `SwitchProps`
Props|Type|Description
---|---|---
`fallback`|`JSX.Element \| undefined`|If all the conditions of the Match component, which is a child component, are not met, it is rendered.
`children`|`ReactNode`|Locate Match Components

#### `MatchProps`
Props|Type|Description
---|---|---
`when`|`boolean \| undefined`|If `true`, the child component is rendered.
`children`|`ReactNode`|Rendered when the condition is `true`.

<br />

## Example

### `Show`
```tsx
const [role, setRole] = useState('user')

<Show when={role === "admin"} fallback={<p>Role is User</p>}>
  <p>Role is Admin</p>
</Show>
```

### `Switch-Match`
```tsx
const [role, setRole] = useState('user')

<Switch fallback={<p>This is Default Children</p>}>
  <Match when={role === "user"}>
    <p>User Component</p>
  </Match>
  <Match when={role === "admin"}>
    <p>Admin Component</p>
  </Match>
</Switch>
```