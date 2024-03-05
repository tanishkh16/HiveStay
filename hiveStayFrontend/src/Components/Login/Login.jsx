import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Cookies from 'js-cookie';
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/Auth/AuthSlice";
import { jwtDecode } from "jwt-decode";
import toast ,{Toaster} from "react-hot-toast";
export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const backgroundImageStyle = {
    backgroundImage:
      "url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBcVFBUYGBcZGRkaGhoaGhkZGRoZGhkaHBcZFxkbISwjGiAoHRkZJDUkKC0vMjIyGSI4PTgxPCwxMi8BCwsLDw4PHRERHTMlIygzLzMxMTExMzExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMf/AABEIAJ8BPgMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAEBQIDBgcBAAj/xABLEAACAQIEAgUHBgoJAwUAAAABAgMAEQQSITEFQQYTIlFhMkJxgZGh0QcUI1KxwRUkM1NicpKy0vAWQ2NzgpOio+E0RFQXg7Pi8f/EABkBAAMBAQEAAAAAAAAAAAAAAAECAwQABf/EADMRAAIBAgUEAQEHAgcAAAAAAAABAgMRBBIhMUETFFFhIgUyQlKBkaGxFdEjJHHB4fDx/9oADAMBAAIRAxEAPwDpUkZAuaAGNAawv6qcNrS7E8NDaqxU+AFb4SjtI8mpB/dBuIY0BbsffWWxGMLEiy28QKcYvgkhOrXHiT91AtwI38kn+fGvQoOlFbmOqpyewuEKc7X8Ksw3ZPk6eujTwVl1saExSSqNNq0qpGeiZDI46tBgxaDe9XJiY2Gh91ZKdpL3a9WYXEt40zwytdMCr62sahRGTqRV5w8XMj12pAAjb0fhsIh881GdO3LLRnfgYx8OhOyqffU5OCRtsoHo0qMXDxyc0whQrzrLKcl9mRVQi94in+jw8f59dXRcJK7E+smnK376viPfSSxNS2rHjRhwAYfhwG+9GrhBRiAGrBGO+sk6sm9TRGkkBiAVNUHfRPUionDCkz3HyizjvEEw8DSMSPNWwLDOwOW9thfntQfQniYxOFUnNmj+ict5zIq3YHW41566U9fDad4+GtYfhXSExM8WVAM7HQZbm9rkjnpvbW1ZqtSNNqTb10N+Gw868HGCV1r7N71IqDYfuJFK8PxuNhdrp7x7tfdTJHDAMrAgi4INwRyIPOnp1Yz1i7kKtCpTdpxsRCld2q5HqpjXwYVZq5BaBQepdYOdCZ6pYHvpcg6m0MS6nnUez3ilcl7VBS1MqXs7qJ7ocZBvevFUHahy90tS/DYh0ex2JpVBtMLlBNDho7UumkYNtpRuMlOS4oaB841ow2uwTUb2TLIzcb1ZkoCVXB00r04lxa4psrexO9g8KKmLd9BCbwq5aRxGTLJpMovQLYktpRMiXFqoQInppopJexW3cjHgi29FRYO3Oo/PlFUYjiBG1G05aDKUI6lmcVTM+mhrNfhV++qH4i551oVFoj1EPXkf61RXHHa2tI0xrVauK50+T0LccPI/hQGILHcCvYcSDV4da5TyvYDhczfFI7jRR7aVQ4GQ7IfVW5KRncCrljjylcoIYEEeB3FaVjckbJGd4TNK7ZjoOHS81ammF4c3O/stR8PAY1cOk+KjsCMond01/Rkz7UxjSRRYSh/72Ncx8M0eQD9k1GWOnLgtHCQXIHDh2HnUdGrd16X4HFYmSWaNkjjWMpZu0+rLcqFGW+ljmJHlAW0orEcCSWxlkle3miV41/ZiK39d6zyrZuCyoW5CkkW+XMMx5XF/HSr1Q0v4P0VweGIMOHRWW5Vjd3BIINmckjQkad9PQlSdQr0kVxx1YU7qltXq2NTcmMooqAcc69zsKI6tai0HcaGZDZCCsTWW/CGFAXNJFmUDMrFD4ENfx7/urTrGQRXOD0LxMhMoeIByWAJbVG11sttb0k/QVOVNXiOsb1bOOrjXITa6EKR2QQQAPpGLXFhytpzIeOGJwDGSI54jrJGwuov54AOl/rDnvypI/RfFwhvoy1tVaFgTbutoxty050Lh+kmIjOSVmdR5koOb1ZhmFQlTje6Vn5RqpfUJL4zV1ynqdVwOKEsSSFGQuobKdxeriVqjDyBkQpbKVUra2xAI202qTmtkVpqYpqLk2tEW9YtSGU8qHr0OKawtggIK96ld6ozivHW/OhZnWA5uIkMQBsapk4sg1K6irMRBzGtI8XIFaxUjxt99aqcIT4M9RyiNJekqgWZDarsDxuM6gWHjWdknQixFBiA+b/xV+1g1tYj15J73N5JxAb5bihZuMoLZlPqrOYHFOL5tQKa5kkUErY1B0IxeqLKs5rQdYfFxsBbnRBArI4o9WOySD3V7g8ebDOxv46D1Urw11mixlWSdmjUO/dQGJRjrY0Rh8SAORo1JlaoXcHsWtGRn1U38kmrbsPM9tOJco2oR4yd9KfqNg6aRj1xUZ30q0QowvmpSVr0CvWdFcM8uOIfKDXw9tmFfKh9NB61dFKRQdJ2GVdN7F5VuV6+ErCvlxZAsRVUkwJ0FJ0m90N1kXnGNV8WNNL+tJqxZ7chSyoDRrobJizRCYukJxBNTSZu+pvDMdYiI4wOIAkm0GrIf9taapihWQWVhJIR/Z3/y1q0Y1++pxwzkroeWIUXY2K4sVM41axLYljzNEokh8m5oPCW3YVib7I1nztTzoeWUg9lqQori18wo+KEEak0jpKPI6qORc3GCnlA/dViccvyPsoN8L3m48daicSiaUenB7IGeS3Y1h4pdlFtyB7TVOA4kBHGO5FHsUClsWLUyIBqS6D2sKWpiR1a2+qPsrlh05WsB17Rvc08nEUoCTikbHLIoZfEBh7DWeZ2POoBCTWmODhyZ5YqXBrEx0ZFkYC2gGwHhXjTjmdazKxsuu3rq0O3Mmh2sVsw9w3ujTRTUSJV7xWRZmGof3misLz+k18aSeGSV7jwxGtrGrV1qqQis/Lj3Qd/iKFfiLnmanHCyeo8sTFGkdhyNLMfG5BysPZQceMNePjQRrcGqQoyi7iSqxkhRMjX7W9eROVNFyd971AFe6t6d0YWrPcJUows2nrqcDgaE/Glp3qaXvfnU3THVTXYPllJIyg3768xEBYX2PdVSTkUZC5OpqbTjsVTUiWEjbLa9GxM6Ebn01GNwKveRSN6zTbb2NMUkg1Jr771U8utUI4vvVhkB21qDgVzsz83DxfS9Qbh3cfaKJidr70UQTuK3OpKPJi6cHwJmwXjpUXwpFNHjHiKsgw5PO9N1pLUHRixDlr61a6PC2Hke6pvh0bRkHrFL3ivsd2j8mOC1LKO6tRHw1AdF09v21Y/BEI0GtHu4HLCSsZRYidgT6KmcK++U+ytLDw7KdTpRioBypJYy2yHjhL7sxsETdZJodOrvpz6sb0RMttCpBpvgQOvxV1uM8Xq+hSmBVDyqcMR6Kzoe/BkSxozAYjKbltKcthEY6LVL8JG+Q+2quvCSs0RVGcXdMLix0ZGtqsZ0I0tSxMEgPaU+8UT+D0byWI8L/Gs0owT0bNEXNrVIvKra9AYvKNwKI+aldm99Qmw992FGDSe4JXsLsIimaMj66n13FTwOBRkXe5UfZReDjUOu2hFjRWDiXILEbD7KapUalp4FhBOOvkDk4OtuYPf/AMUE/C3DWFP3ltpXwnubUI15oMqMGKE4FIR5S+jevTwh/JJHpF60UHpq9h4UjxVS46w0DHPwiQbWPuqK8PlB0W3rFbRWHdUsinlR7yfKB2keGYqfBy2sRpQbQMNwR6q3j4UGhn4cp3FPDGeUJPB32ZjFBHL3VMC/m3Naz8HquwqmfB3Gwqndxb2E7WSW5lCvhavLU2m4c19B76qfh5A3F+6tCrR8meVGa4FxWvlSiXgI3tXyxm1wKbqJ7C9KS3JQ4a4ohI7VLBX5imKw3rNUqNPU0wpqwKkJPKi0gA5UUkOmlfFCKyzqXNEYWKDDVkaW2qxY2NECA91Tb8lBBDBY60cALVeIr7V62H7xVZVL7ixpW2FOIYVGHEAGjMRhgeVUfM17qrGcbWZKUJJ6DDD49e+ikxKnmKTfML7XFShwjDmTUpQg9mPGcvA9AU1F2C8xS1WZeZoZ5yb3OlTVK73HdSw1lxiW1IqsY2PvpQbnYi3qqStyqnRSQnVk2XcMxUfXYy7AAyRW9HUR0z6pDqrD21lMJfrsTsLPF/8ADHTBZCBpa/8APdSxpXV0xpVLOzQ8VCNtauS/OkHz91O9WLxKQ7beiudCQFXiO2RdzS7EYmEEjN6bV7EHYa31r1+EKRtbxpYqMX8n+g0nKS+K/USYiS57DNbx+FeJGfOJrQLwNO819JwrcBvhWhYmnsjP21TdgOFwyKQRvy1oNpMtsm2UejamS8OdDmJuADf2GqPwe4XyeQ5eHKljOOZtu48oSyKytqwM4gkg91FRZiL3qLYFx5jW9VeiCQahSBz0qsnFrSxKKmtxhhc1HrJSyHEFRV0eKNY5wbZshJINMlq+M68zQk+KPhQucMaCp33C6iWiG6uD51fOO4++g4YCfVRkcPePZSSSXI8bsFaYg99TV77iizCttq8MIrs8Q5WgRl8KX4kDejcYxG2tI8ZiG2q9GLkzPWkooqmK3qyIjzRQaoWo7DRkb1rlFRRljJyYVBEKNFraUIrG1SQk1mkmzTGyLGlNXxm9VBKvjYd1Tk0OkEI3jUhJ41TnFehgam0PYKGGFS6iuRL0t4j+fJ9KQ/wVaOl/Efzo/Yi/hrH3CPV7KXo6q2GFV/Mx3Vy/+mPEOci/sR/CpDpjj/zifsx13cpAeAk/B035oK9GFrmQ6Z44byJ7I6kvTLHfnI/9r40e6QvYS8o6LLge/ahZeHp6awjdMcd+di/2rfbVLdK8aT+Vj9kNNHGJCS+myfKNucOBplqkKu2tYpuk2MO88dv/AGaHbjGJ3M66/pw+4VVfUIc3Jv6VU4kh7K8qviWiy36yMEsrPYCJRcIpu386Vn5OITlh+NMSbnyCoNjZhbKLEHwqT8SmSRskoUskTMcyC7NEt2BP2iqZOIyNZmlRu4loifbvWWtXbfxk0bcPhUo/JJ/6+jyTj0iKHfENlOl8jGx8RlvvV8HSySFg8k+ZL2KvGbHnuADtzqpsSxVlbq2zAi+ZAdiBqPTfagOK42LGJGqoUyMxZWsSbqQAQNtTf1Ukas3vJjToJOyin+h0/op0swuN7MZCSi56tiLsB50Z2ce8cwK1qDSvzhhOCojo3WSBUYnsEI/IqFfWxDXN9+1yrqGC6fKiKjRSuVUDOzoWaw8piABc+irdaL3ZmeDqRekTodq+yisQvyhw2uYZNPFPDx8RXh+UeD8zL/t/x13Uj5CqE3sjY4xfo3/Ub7DVqDQegVj8L01gxBMKRyhnVwCwTKLIza2cnl3VWvygxWH0MntT413Uj5AqE72sbUqK86sVij8ocXOCT2rUD8o0X5h/2krurHyHtaj+6bJ8Kp3FUSYFeVZT/wBRo/zD/tLVn9P4+rLiF7hgMuZdQQTmB8LWtbmKZV15ElgpfhNE+BvUkwyrytWTb5R0H/bt/mD+GoH5R0P/AGzf5g/hpu6WzYv9PqbqP8BXTfj5wsarG4R3Orlc7KP0V7/E3Fczn47PHlPWzkPqCHkF7ka+VfW9PuNcQixzM3zZhJkazdcxC6aHLlC92nPQUsxcrlIY2VEEUaxraylsvnOSdTp6qySq3k9TfTw8oRS0T5vYoXpBiTl+lxGvfJJpvv2vCr8N0mxcbjLLOWLBFU5pM7HUAIxN/ZQoxRFz1ijx6xBt/iq5McylWEwVh5LCVQQSCDY5u4keg0qqL2VdBvlfsdhwCzNChxAUSEXYKNB3A6nW29tKHnwIauYrx+cG3zt7+M/3ZquXpNPb/qv91dPT2q1U8YobJmCr9Mc3fMjoKYcK1iKtKDlXNj0lm3+daHn1y/Gvm6Rz7fOv91PjVXj4vhiL6U195HTEQc6tRRXKx0kxGv42dP7ZfjX39JsRa/zs2/vl+NI8Ynwwr6Y195HWVQVJVHKuSN0kxP8A5ba/2q/xV5/SPE/+W3+cv8VL3a8Dr6a/xI6+IxXvVCuPf0lxG/zxv84fxV4ekuI/8x/84fxUO7Xhh/pr/EjLfNsMWEWY5iRZdb3axWx2G4qJhw62kZ7K3ZBsdSLFtLdxWoop+fiwGjC+gNsqjw025VVxRfxfDgAX+kPLe0ffpUeUvJbLo34CHiwoCoz2DAMujbNsRppV8uHw6ZnZiMjdWxsTZu1obDXyG18KCxkZ6+JQAbJEPJU6WvcC1hy2onjA/FnPfiWPft1tvTXNbBS0fo8ZMKEBL9l8xGj62Njy01qxsPD5QPkIGJs2iMFYHbXRl08aW49SI8MLDyWNsq21fXS1uRpw6WhxJI16uIbWt2IRtyrmkBLNv6/gGT5pkds5yZgG0fymBIsLdyn2UVh8LBJ1ZUk3ByGzbAlTuO8c6SZSMISVAvILdlRchJLbDXcVoeBJpFcAWikOwH9ZLyA8KE1ZXR0FmaT8AUDYVs5Vr2XM+j+SLC+o8RX0a4V07JLKrKNmuCQxXlrojeyl3DEOSYkDL1dr2W/5SIC5Gv1vZR/BoiIxdVF5E2Ci5Czc130K0ZJK9vQsVe1/f7DHiKxrLHG5s5igRBqbkxoLaCw1tvQWFfCuSiMT5TEWYaDVtwKN40jHHR5QDYxXuFNrGPa+2gJ0+FJOCI2drAZRG+tlv5A52vveuaTV/SFirae2hnxnhykhkYggCxB079vXQccD9khzmUghuft9FOsdEq6KLDe3p1NL8TgRIFvyN+f3UcmtgdR2PZ8XMpF5iB3XGtfJipzr1rFTt9+tCdIrKqmwNjexpQJF+pcEuALnS+5Hsrukg9WXk0KrOzButJIzAaDS4va1quVMUQPpDfS/YGv+mp4EhQvYKjq1Fib/ANUANwPD2Us4LwYxTpI7gojXOUEsR4A2HtNC0OWVSrbpPU1nRHDz/PELuSgSUkZQP6mTnbvtSQRYo7SEWY+aNRc25d1bzgPEYGlKoJCxSXKWVVAIjck6OeQI251zDGcCkklkdXCqzuwBLaKWJA9hrkoWFtWzbajYYXFXPbNu7KNPdU2wOJAUCQ3sCTkHfttWdPR+T84P9VdQ4PxvBR4eGOTDyNJHFGjspFiyoAxH0g0JB5CllkXI6hX8MygwuIBv1mltsi/Cvkw+KykdaRck+So2HZ5crn2150+EWKaJ8KjIERlZXIu1zfs9ojbxFbH5MeDxtgYS6HMZJs18wOhIAIv4Cj8Mt0Tl1Yv5aGPkgn0PWEWIJ0GoG99KLwCu8i2lGx7HZ7Xj36Vm8LKDjHULa8k9zcalQxvqL8+RFFdA1Vp2ZUykR/WuLFx4fo0J01lb9Dxqu9r8s2SYCYFiH0K2ACgW7yDb0eyg+BdBWmeZiRdAMubmXJvc+gHWtdhuAriHRja6AG5vydW0se8D2Vr8FgFiDkeda/qv8ajTi76ewVKulj88cUTDwSSYeTMHRirAAnXwI9NQLYfrBEc2cPkC28++W19tzVvS4MeKYgBQR16+araG2bUi49PKqsOrHiXkAr86a5yLpZwVOa1xrzvWlJWT9XJ8/nYlKkCBpGDAAqpNju2YgePkmqTJhRH1nayM7Lex1YAEj2MKadIU/F+yAfpY9MobS0l9CKU4lX+ZQdgZjLNcZF3ypl7GWw2HKhFX38hkrbeLhMWHhdYyquVYgJpuc2Uc/raa1TE2HeTKoYv2ha31QS2t7bA+ytLwKP6LC3UA5QSLBbEzMToBprWd6PRscU91GXJiLNkUdrLIB2rX28aC59XHcdvZXhmw751QMTlLNodha5N/SK9xHzdETMGCtfLodchsefI1b0RQkzlkAHUCxyKu7x5tQBerOl0bBYci5uzL5gfXrfEHvNN96wqXwv8A93BMRJh0KM+YFkDLodVbY+6iGwsalro4OTrG080Lmude4jSq+k0TB4AqAj5vhwewrWGU31INtq1HF4/+psNepksLX8wEC3Palk7JexlG9/Rj4jhnRwocqi5m0OgzAX37yKsw+HhnBKK7BLA8rZr25j6p9lX8HS2GxpKjTqwOwoBQSdwFmpl0XT8XluAD1q7KFuMr5dAByrqjtF2DRjmlG4sgmiMjzqJczPYKQlryK9tQdhaisXw5RhkeQuBENQgU3LFB51A8MuY0vl/Kp5JB/q23sdN60nSP/oX8XjHvFBqzGz3tYz8EsLv1wE30axaEJY5SiC2u/P20wbhvWYZjJnUKzynLlJsA5tr6aTcLZuqcELY9Xsyk/le4H9GtxNpgpz/Yv7xb765rf0dnva3JjFmglZLdcBGj+amoXPIb9rc7U6w2D69JVsyrKVt5OYBch11t5lZnhDMA4slurlHlrm/Jnzb3592ldF6MAdgH+dDXSjb8jupdK3Jh88LAYcGa6yeVkS1/I+vtrennCo87WQNlVGjuQASc8hJAB27Q51meGsevBAUgyqLl1B7THkTvptzrb9F7W9Z+01zid1LR082MtOkUHWYdjMWKqCQiaXySfX1OlqY4KEWREzmxRyWCiwaO4GhOtmoPphccRxOULbOd2VfJRe8jT7Kc8GJLEkC5WK9iCPySaAjQ+mhbZ+TnNWdgPjOISLF5pBITaMgKFPmg63YW5UJwyJFTsdYS+dAGVF2CEk2c6dsew1Z0yDHFnKLn6MWJA0yL31dwYserzoFN5NMwbT6LW4oyjt+RONRZX51COK6Nb0fYKGRxVvHH+kPppbcAMbcib+gd1GpUcUrEYRUtyjjsLuEyKTY62BPLwBoXg/FUjNmjSQk7nOGHgDanMbkEac/Ha5t7hWVgJGW6nUb20G41/nnS05updNFVaDVma3GcSdRnXDoVOSxLNftAWFuW9RfFSAD8WS+mmZvjTsIrYObQaDDW02PXRDT3iiOKzoq4J1Qg4iBSdfOszXPqXlRlBcBWIn5KOieIdsTYxKo6qckgkkWha25pI/EJA1vm6ka65m9XOtV0ew4E8jgaiCf9w1zmbiyK7qVa4ZhpbkT40FC8bI7ryUr3HQ4i9/8Ap0t35m+NRTib63gTTbtNr76RvxuM+a/u+NNcPGGVWtuAfHXWldO26KLETezLsPxGSQ5Uwgdy6oqqXJOYE39Gnorp3QvhmJhcGePqwym0Ykz9sqSdAxAIta/jXPcfP80RJWRrOEtawJHa1F+V1tWl6MdNGfqnfM0alxZiM40y78x6afp6XRKVeUllbMliMG2Gnfr3SMs0hCkuGsxa1xl8RRvRKEhg4dXUgr2SxFwVJ3UVP5T8ck2LRowzr1QByqTYi5sfGjOiVhEnYZL5iQwsb5iL29AFJNPKVjOLOmdGjqf1fvFaCU9k1lOFcTSN44+qkZpNM6gFFBfKM+tx37bCtRiT2T6vtFdS0TMs/tHBumWAMOMlxE2dEkk7HYzZtDqrBtdF9VxS/h08bTvOrOQJVkK9XY9p7hb5tdq2XyzAmPC2Uk9Y2gF/NrJdH2JhcNEyEPHqwIzA5tBca2t76KjeN/yNSnb+Rhi8G0sYQZhd4zcLmAtnBuLiw7Q18DSaXFwSRxxLI11kJv1Z1zhVA301Hvrp3R+JWinJAJWO6+Bs1co6PEieINC7KZEucpsO3a7G2g512XV24OhVVknya3BuBkQBj1RIY2te0pY5daTRPHhZA8jP9J1pC9WQbMHTvOxb12rT8HA6w3+uf3qVfKpEExcYSNmUR7KCdyPjXZNl5Cqurvx/4LuBmOONmVmcOrRDsFe0DGxJudtvbRHGcNmyEllESSMxyEjKWB3HPbTxq7h2uHgOQoc0lwwsb5tyPRatPxzDr+C53C3azLpfUZQbW9NBq2vv/gPU+SXFjBTYiLEyxhJDcQrHYo2vVqxY35C1/ZT3FYgSLI6hsrxsvkkkXS18u9I+iAPWsGidbRS2ZlIW+W2h9F63nRLDo7KjC6m9xt5ppsqu14QJVdE/L/gwZmigjmw8jkO6IPIbsnRu0PQdqZ8GkSOLIbtnySKQpHZswF7996T9LbjHz9hm7Y8lb+atacot0sLDqYbDuGQaUMiklfnUZ1ct2uNDI8OiCpHa+svP9GMD+fTWg6TvbBH+8T3W+FfQ8MRQoBJykkek2Bv6gKuxeFEkfVyN2b300N6k8THnyYO6gnpsZLh0QERIJ3jXX9d239fura4t/wAQxH90f3loFOERhcgzWup9a3t9tE4jD5o3jLHq2WxAF2I30try7q5YqDb9nLFU9LcGF4TCLO19kk0t9ZQN710Xow/k+CsfYhpPhejTZD1UMrKwI1yrcHe3WFacYHgeKjAKRSLuO08XMEG4WQ8jVXUzX0HVRaWTOecHhDyqcxH0sbbX8knTfnetx0Te6r417gugs0ZBRVBBv2pAdfUKY4DoliorBDEANgZX+6M0c92M5K1knuYnpaofiGJBJH0kg2v5QA7xtTvgwynL3BB7IkFaXE/Jqs8hnOKCyOczqBmQMdwrE5jrfcDlpVqfJ1iEZmSeM3+sH5AAbeAorVJLgLlHUw/TBwMUL90Z012FE4acu0ZP1XG1vqDvPjTXGdD5cTjJULx54Y4cxGbKxcG2QWvy50XD0FxakBTF2b2JL8yPDwrpSs0hFlyvyZzip+kag8Ml1BPMD3itZjOhOLLXYxH/ABH4VVF0IxYAAWOwH1+XsoSlCX2hYqS2Mpiz1MbONSttyT3De/8AJvWQiOqeGnvJ++uuYjoFi3UoyIQRtnHp8PtpWfk8xC/1C8/6xfszUVUhG+VD5W92WYeW2FxA/Qw3ulivQvEuJo68MjXMDFh0DEgWv1THTXXejJOjOOVCBEDfQrnj1AsRrm12HdSmfopxG6MIUunk2dAPBbFhyNtKKqJnZLGv6OMC8w7sNN70rjGO/Kyfrt+8a6pwXC46AuzYPM7RvGbSxhLMVuQM5ubKRqOe4pW3Q+VlucMA5JJu0ZtfkRm1PjejGaihXBy5Ob1t8Gv0cf6i/uirX6FODdoyRbYFBbfTRt/G/dRg4PIAFVSAtuYP2naunUT2GjTa3YP0vxwnwqKRl6iKJFsfKykDtAjTSRtu4Us6PzEQqB3v9t6YYjAtqJAcpAFuzbQ8+/YHeqY8Oq6KuUA6DlrvauhU4sCdPm4r40pkkzX2UjnrcEDYd9aLoVOwTIbdj065mZr6+mk2MikLCyEj9ZQfYTTrgQWIm/O29uW9reJrpttWDDKlc6jwCSLKGdgHBt5ZXS9xpcX1rSyzqyEqwO2xB5iuNz8RG4b2DXf01X+GVurZmBDeA07wb3vflUowadwSaY2+WXWLC+EhPsFY7o1h2SGS5Bu0Q0vuC55juIrQ9KOLxYuFI5HJaNi6sUClrgjIxDnTW+a3KiuCcLhmwjLA6CQyKe05Oib9ka630plmjG1uf9yicW782Y+6ON9Fif7r+KuTcCwjfOISCNJF01v+UJ7rbEV2LgmDkw4kEirIrrlsoY+G2XUa0j4b0cXDP1ssSsiMGJVu1a+llNtdtK5ztdgWWyzcagfCW+kP65+2lvywws2LQLYfR23Pep+6mOHcLIzqvZLllXmATcC/fVnSeeLGypI0RjKqVN3PavqO62xqfXgmmnt/Yh3NK7u9/wC4l4UjJhYFbUhpB7xWr40pPCcQPT+4KUYxojDHHFGUdCxJLZgbjYC+mtj6jTCTisbYSTDPG5MgNmBAUG1he1B1qbW+t7jPE0VJNPSyRhehuGZZ3YkFTFJbU/VPK1dA6Gsesjt4/umlHAYsPBmLxMxKsuj21YWvqaJ4Fj/m0iuyl8vJfRai60G22xZV6Vkk/JjOm2HkbHTZWt2lPlEebrWlxGhj/uo/3RUOM4KObEvOFZQ1uyWF7jxtVuKXMwI7ICKoBIbyRbQhV0053O+tdGvD4pvZDuvR1ebVmgToy3nMnvP2ipr0ZP5wD0CjG4nGN2PsNUScdiC5ruQO4fE1DJSWhJ0aK3aPl6MjnKf2R8a+fotEwyyFnXuBZP8AUjA0LJ0qj5Zzpz0525XoY9LGPkR31tq1tefKiukndIRKhF3RoOHcOjwy5Io8i3vbM7a/4iTRnX+FYp+lcreSijXc3bl4kULNx3EEeUF/VAsdPG5p3VRTuYI35l8D6qpxHEYo/wAo6r+syj7TXN5sXK+jSOw28o919jpQ+l+yB7Bzt8a7qIR4uPCOjHjmG/PR+p0P2VEcfwhNhIp9F294FYPD4LNqTlXXbW9hrccv+KMhiAPZKkbecDpc93h31N1ifdN7IYw8YgTGzvmDBo4goVhe63zXHm78++mK9JFYkKi8t3bf2VmZVQ3IVjm0JzWGm9l++vEiy6MQAdADcm19uY//AGlnWzWsCWIlfRmnbj5+rcfosxt6bmr16QsNwQBuS5FvebbVlGlA8kZTf0+PdQuIxaoCzEKAOS9wHcPTQU5PYXrz8nR8HxJJBdJH03F9RerTKPzjes3rD/J7jhL84YAhQ0YUHe1nJJ1OtzWzJFacrW56FNtxTe567nkxPpcj3WNRKhvKP+o/bYVEt/OtRY0ShJsPH4/tN8ag2Fj8f2jX16+vXAKm4bGe/wDaP31E8Lj01OnjV5e1R63w+z4ULsIJJwGFt7n/ABUP/RqAebf0sfuIpoH/AJ0rzP4fZRzNAsgZeCYfYxLp4k18eCYblEnsPxooP4fZ8K9zfzp8K7OzsqA/wJh/zKeyrF4Th7W6mO3PsD7xV2avus9Hso52dlRGPheGXbDw/wCVH8KIiijQ3SKJT3hFB9wqkyV6HruozsiDvnR8KGxmWVCkgJU28k2IIqjrRYk7DfelcnHkvZLsT6QPfSTmragm4RXyLPwHH9Z/d8K9/AsX1n9v/FCfhpjeyW9J9m3pr38LOdlW3r7wO/vNZ/8ADXBk/wAsuAv8CRd7n1//AFr0cEitbt+34Cgfw0+oCrcC/Mb7c/A19JxaQGwVffsPXXZqfj9gXw/j9g8cDi7n9v26V8eCQ/p+377UtPGH70B5jKx23514eKS6nMtgNdCPZvRzU/B18P4/YZngkX6ft/4/m9ejgsX6ftHwpT+FZdNt7bDeqcVxmVSLEai9so9tDNT8HZqH4T//2Q==')",
  };
const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hello")
    try {
      const res = await axios.post("http://localhost:3000/api/login", {
        email,
        password},{
        headers: {
          "Content-Type": "application/json",
        },
        });
      console.log("token",res.data.token);
      const token=res.data.token;
      const decodedToken = jwtDecode(token);
      const user = decodedToken;
      
      if (res.status === 200) {
        Cookies.set('accessToken', token);

        dispatch(setUser(res.data.rest));
        toast.success("Login Successfull!");
        navigate("/");
      }else{
        toast.error("Invalid Credentials");
      }
      
      
  }catch(err){
    console.log(err);
    toast.error("Plase Login again");
    navigate("/login")
  }
}
  return (
    <html>
      <body class="bg-gray-200">
        <div class="container position-sticky z-index-sticky top-0">
          <div class="row">
            <div class="col-8"></div>
          </div>
        </div>
        <main class="main-content  mt-0">
          <div
            class="page-header align-items-start min-vh-100"
            style={backgroundImageStyle}
          >
            <span class="mask bg-gradient-dark opacity-6"></span>
            <div class="container my-auto">
              <div class="row">
                <div class="col-lg-4 col-md-8 col-12 mx-auto">
                  <div class="card z-index-0 fadeIn3 fadeInBottom">
                    <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                      <div class="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                        <h4 class="text-white font-weight-bolder text-xl text-center mt-2 mb-0">
                          Login
                        </h4>
                        <div class="row mt-3"></div>
                      </div>
                    </div>
                    <div class="card-body">
                      <form onSubmit={handleSubmit} role="form" class="text-start">
                        <div class="input-group input-group-outline my-3">
                          <input
                            type="email"
                            placeholder="Email"
                            class="form-control"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div class="input-group input-group-outline mb-3">
                          <input
                            type="password"
                            placeholder="Password"
                            class="form-control"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>

                        <div class="text-center">
                          <button
                            type="submit"
                            class="bg-pink-600 h-10 rounded-lg hover:bg-pink-500 text-white w-100 my-4 mb-2"
                          >
                            Sign in
                          </button>
                        </div>
                        <p class="mt-4 text-sm text-center">
                          Don't have an account?
                          <Link
                            to="/signup"
                            class="text-primary text-gradient font-weight-bold"
                          >
                            Sign up
                          </Link>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
