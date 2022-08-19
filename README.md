# React Utils Component
## Motivation
This project is inspired by [solidjs](https://www.solidjs.com/) and [vuejs](https://vuejs.org/).

<br />

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
`fallback`|`JSX.Element \| undefined`|Rendered when the condition is `false`.
`children`|`ReactNode`|Rendered when the condition is `true`.

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

### `List`
This is a component inspired by methods in `Array` in javascript.

#### `List.Map`
It works the same as an `Array`'s `map`.

Props|Type|Description
---|---|---
`each`|`T[]`|The array you want to iterate over.
`children`|`(item: T, index?: number) => U`|The first argument contains an item of the same type as the single type of `each`. The second argument is `index`. Just return `JSX.Element` you want to iterate over.

#### `List.Filter`
It works the same as the `Array`'s `filter`.

Props|Type|Description
---|---|---
`each`|`T[]`|The array you want to iterate over.
`predicate`|`(item: T) => boolean`|A function that accepts up to one arguments. The filter method calls the predicate function one time for each element in the array.
`children`|`(item: T, index?: number) => U`|The first argument contains an item of the same type as the single type of `each`. The second argument is `index`. Just return `JSX.Element` you want to iterate over.

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

### `List.Map`

```tsx
const todos = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: 'fugiat veniam minus',
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: 'et porro tempora',
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
    completed: false,
  },
];

<List.Map each={todos}>
  {(todo => (
    <li key={todo.id}>
      <h2>{todo.title}</h2>
    </li>
  ))}
</List.Map>
```

### `List.Filter`

```tsx
const todos = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: 'fugiat veniam minus',
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: 'et porro tempora',
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
    completed: false,
  },
];

{/* Only Rendered when `completed=true` */}
<List.Filter
  each={todos}
  predicate={todo => todo.completed}
>
  {(todo => (
    <li key={todo.id}>
      <h2>{todo.title}</h2>
      <p>
        {todo.completed ? 'Completed!!!' : 'Not Completed'}
      </p>
    </li>
  ))}
</List.Filter>
```