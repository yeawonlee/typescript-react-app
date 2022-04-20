import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

const options = ['Create a merge commit', 'Squash and merge', 'Rebase and merge'];

const SplitButtons = () => {
  const [open, setOpen] = React.useState(false);

  // DOM Element를 ref로 받아서 값 수정
  // DOM을 직접 조작하기 위해 프로퍼티로 useRef 객체를 사용할 경우, RefObject<T>를 사용해야 하므로 초깃값으로 null을 줌
  const anchorRef = React.useRef<HTMLDivElement>(null); // 1. useRef 객체 생성

  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>, index: number) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    /* useRef 사용 이유
     * 1. 다시 렌더링 되어도 동일한 참조 값을 유지
     * - re-rendering X, 컴포넌트의 속성만 조회/수정
     * - current 속성을 가지고 있는 객체 반환, 인자로 넘어온 초기값을 current 속성에 할당
     * - current 속성: 값을 변경해도 state를 변경할 때처럼 React 컴포넌트가 다시 렌더링되지 X
     *                 React 컴포넌트가 다시 렌더링될 때도 current 속성 값 유실 X
     * 2. DOM 노드나 React Element에 직접 접근
     * ※ [Ref와 DOM](https://ko.reactjs.org/docs/refs-and-the-dom.html#when-to-use-refs)
     */
    if(anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
        return;
    }

    setOpen(false);
  };

  return (
    <section>
      <h1>Split Buttons</h1>

      {/* <> */}
      <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button"> {/* 선택하고 싶은 DOM에 속성 값으로 ref 값 설정 */}
        <Button onClick={handleClick}>{options[selectedIndex]}</Button>
        <Button
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      disabled={index === 2}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
      {/* </> */}
    </section>
  )
};

export default SplitButtons;
