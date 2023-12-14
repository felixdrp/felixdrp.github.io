import logo from './assets/GitHub_Logo.png';

function GitHubIcon({
    size: {h=null, w=null} = {h: null, w: null},
    class: classCustom,
}) {
  return <img
    // github icon
    src={logo}
    alt="github logo"
    style={{
      filter: `
        drop-shadow(1px 1px 0 white)
        drop-shadow(-1px -1px 0 white)
        drop-shadow(-1px 1px 0 white)
        drop-shadow(1px -1px 0 white)
      `
    }}
    class={classCustom}
    width={w}
    height={h}
    />
}

export default GitHubIcon;