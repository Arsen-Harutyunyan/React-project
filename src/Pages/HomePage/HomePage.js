import React, { useState } from "react";
import './HomePage.css';


export default function Home() {
    const [count, setCount] = useState(false)
    const [nkar, setNkar] = useState(false)
    const [real, setReal] = useState(false)
    return (
        <div>
            <div className="masin">
                <div className="as">
                    <div className="negr" onClick={() => setCount((e) => !e)}></div>
                    {count && <div className="real"><a className="a1" href="https://www.google.com/search?q=negr+devochki&rlz=1C1YTUH_ruAM1006AM1006&oq=&aqs=chrome.0.69i59i450l8.251394764j0j15&sourceid=chrome&ie=UTF-8">smir indz imacir avelin</a></div>}
                </div>
                <div className="as">
                    <div className="blandinka" onClick={() => setNkar((e) => !e)}></div>
                    {nkar && <div className="real"><a className="a1" href="https://www.google.com/search?q=%D0%B1%D0%BB%D0%BE%D0%BD%D0%B4%D0%B8%D0%BD%D0%BA%D0%B0+%D0%B2+%D0%B7%D0%B0%D0%BA%D0%BE%D0%BD%D0%B5&rlz=1C1YTUH_ruAM1006AM1006&ei=jAFUY6_XCaGFxc8Pk5SgsAc&gs_ssp=eJzj4tTP1TcwsjQrKzNg9FK6sPHC7gv7Luy9sOXCDiC568IGhQubFC5sv7AByAaJbwUAO10b9g&oq=blandink&gs_lcp=Cgdnd3Mtd2l6EAEYADIMCC4QgAQQ1AIQChAqMgoILhCABBDUAhAKMgUIABCABDIGCAAQHhAKMgYIABAeEAoyBggAEB4QCjIGCAAQHhAKMgQIABAeMggIABAFEB4QCjIICAAQBRAeEAo6CAgAEKIEELADOgoIABAeEKIEELADOgsILhCABBCxAxCDAToICAAQgAQQsQM6CwgAEIAEELEDEIMBOgsILhCxAxCDARDUAjoRCC4QgAQQsQMQgwEQxwEQ0QM6DgguEIAEELEDEMcBEK8BOg4ILhCABBCxAxDHARDRAzoOCC4QgAQQsQMQgwEQ1AI6CAguEIAEENQCOggIABCxAxCDAToFCC4QgAQ6BwgAEIAEEAo6CggAEIAEELEDEAo6BwguEIAEEApKBAhBGAFKBAhGGABQzwxY80NguF5oAXAAeACAAbUBiAGiCZIBAzAuOJgBAKABAcgBAsABAQ&sclient=gws-wiz">smir indz imacir avelin</a></div>}
                </div>
                <div className="as">
                    <div className="brunetka" onClick={() => setReal((e) => !e)}></div>
                    {real && <div className="real"><a className="a1" href="https://www.google.com/search?q=brunetka&rlz=1C1YTUH_ruAM1006AM1006&ei=CQJUY8_XKNGVxc8PtI-F6AM&ved=0ahUKEwiPgODgifT6AhXRSvEDHbRHAT0Q4dUDCA8&uact=5&oq=brunetka&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgUILhCABDIECAAQHjoLCAAQgAQQsQMQgwE6CwguELEDEIMBENQCOgQILhBDOgsILhCABBCxAxCDAToICAAQgAQQsQM6EQguEIAEELEDEIMBEMcBENEDOg4ILhCABBCxAxDHARCvAToICC4QgAQQsQM6CAguELEDEIMBOggILhCABBDUAjoOCC4QsQMQgwEQxwEQ0QM6DgguEIAEEMcBENEDENQCSgQIQRgASgQIRhgAUABY3iVgjkVoAHABeACAAf0EiAGxEJIBCzAuMS40LjEuMC4xmAEAoAEBwAEB&sclient=gws-wiz">smir indz imacir avelin</a></div>}
                </div>
            </div>
        </div>
    )
}