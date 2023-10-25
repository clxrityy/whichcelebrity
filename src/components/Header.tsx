import { colors } from "@/constants/colors";
import Image from "next/image";
import Link from "next/link";
import { RiGitRepositoryFill } from 'react-icons/ri';


function Header() {
    return (
        <header className="flex flex-row items-center justify-between p-5">

            <div>
                <Link href='/'>
                    <Image src='/logo.png' alt="logo" width={50} height={50} priority className="scale-hover" />
                </Link>
            </div>

            <div>
                <Link href='/'>
                    <RiGitRepositoryFill size={30} color={colors.white2} className="scale-hover" />
                </Link>
            </div>
        </header>
    );
}

export default Header;