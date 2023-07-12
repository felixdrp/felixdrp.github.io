
function NpmIcon({
    size: {h=null, w=null} = {h: null, w: null},
    class: classCustom,
}) {
  return <img
    // NPM icon
    src='https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg'
    alt="npm"
    class={classCustom}
    width={w}
    height={h}
    />
}

export default NpmIcon;
