import Each from '../each/Each'
import './Main.css'
import socrates from '../../assets/Socrates_Louvre.jpg.webp'
import platon from '../../assets/330px-Plato_Silanion_Musei_Capitolini_MC1377.jpg'
import aristoteles from '../../assets/Aristotle_Altemps_Inv8575.jpg.webp'
import augustinus from '../../assets/330px-Augustine_of_Hippo.jpg'
import aquinas from '../../assets/St-thomas-aquinas.jpg.webp'
import descartes from '../../assets/330px-Frans_Hals_-_Portret_van_René_Descartes.webp'
import kant from '../../assets/Immanuel_Kant_-_Gemaelde_1.jpg.webp'
import hegel from '../../assets/1831_Schlesinger_Philosoph_Georg_Friedrich_Wilhelm_Hegel_anagoria.JPG'
import marx from '../../assets/Karl_Marx_001.JPG'
import nietzsche from '../../assets/Nietzsche187a.jpg.webp'
import locke from '../../assets/John_Locke.JPG'

export default function Main() {

    const philosophers = [

        {
            id: 1,
            age: "antik",
            title: "🏛️ Antik Felsefe",
            philosophers: [
                {
                    id: "sokrates",
                    title: "Sokrates (M.Ö. 469–399, Antik Yunan)",
                    list: [
                        {
                            id: 1,
                            title: "Temel Düşünceleri",
                            description: "Sokratik Yöntem, Etik, Sorgulama ile Bilgiye Ulaşma"
                        },
                        {
                            id: 2,
                            title: "Açıklama",
                            description: "Sokrates, yazılı eser bırakmadı; düşüncelerini öğrencisi Platon aracılığıyla biliyoruz. Ona göre, insanların doğruları bulmasının yolu soru sormak ve sorgulamak (Sokratik Yöntem) idi. En ünlü sözü: “Sorgulanmamış bir hayat yaşanmaya değmez.” Ahlak, erdem, adalet gibi konulara yoğunlaştı. Kendini tanımanın, erdemli yaşamanın yolunu felsefeyle bulmaya çalıştı."
                        }
                    ],
                    pic: socrates,
                    span: "Sokrates büstü",
                    hrefs: [
                        {
                            id: 1,
                            title: "Louvre Müzesi",
                            href: "https://tr.wikipedia.org/wiki/Louvre_Müzesi"
                        },
                        {
                            id: 2,
                            title: "Paris",
                            href: "https://tr.wikipedia.org/wiki/Paris"
                        }
                    ]
                },
                {
                    id: "platon",
                    title: "Platon (M.Ö. 427–347, Antik Yunan)",
                    list: [
                        {
                            id: 1,
                            title: "Temel Düşünceleri",
                            description: "İdealar Kuramı (Formlar Kuramı), Devlet Teorisi, Ruh-Beden İkiliği"
                        },
                        {
                            id: 2,
                            title: "Açıklama",
                            description: "Platon’a göre duyularla algıladığımız dünya, gerçek dünyanın yalnızca bir kopyasıdır. Gerçeklik, değişmeyen ve mükemmel olan “İdealar Dünyası”ndadır (adalet, güzellik gibi kavramlar). Devlet adlı eserinde, toplumun en bilgili kişileri olan filozof kralların yönetmesi gerektiğini savunur. Ayrıca ruhun ölümsüz olduğuna inanır."
                        }
                    ],
                    pic: platon,
                    span: "Silanion tarafından Akademi için yapılmış büstün Roma dönemi kopyası (y. MÖ 370)",
                    hrefs: [
                        {
                            id: 1,
                            title: "Capitol Müzesi",
                            href: "https://tr.wikipedia.org/wiki/Capitol_Müzesi"
                        }
                    ]
                },
                {
                    id: "aristoteles",
                    title: "Aristoteles (M.Ö. 384–322, Antik Yunan)",
                    list: [
                        {
                            id: 1,
                            title: "Temel Düşünceleri",
                            description: "Mantık, Erdem Ahlakı, Altın Orta"
                        },
                        {
                            id: 2,
                            title: "Açıklama",
                            description: "Platon’un öğrencisi olan Aristoteles, daha çok gözlem ve deneyime dayalı bir anlayış benimsedi. Mantık alanında sistematik kurallar geliştirdi. Ahlak anlayışı ise “Altın Orta” kavramına dayanır: Erdem, iki uç davranışın ortasında yer alır. Örneğin: Cesaret, korkaklıkla düşüncesizliğin ortasıdır. Amaç, eudaimonia (iyi, mutlu ve erdemli bir yaşam) elde etmektir."
                        }
                    ],
                    pic: aristoteles,
                    span: "Aristoteles'in; y. MÖ 330'da Yunan heykeltıraş Lysippos tarafından bronzdan yapılan büstünü kopyası",
                    hrefs: [
                        {
                            id: 1,
                            title: "Lysippos",
                            href: "https://tr.wikipedia.org/wiki/Lysippos"
                        }
                    ]
                },
                {
                    id: "platon",
                    title: "Platon (M.Ö. 427–347, Antik Yunan)",
                    list: [
                        {
                            id: 1,
                            title: "Temel Düşünceleri",
                            description: "İdealar Kuramı (Formlar Kuramı), Devlet Teorisi, Ruh-Beden İkiliği"
                        },
                        {
                            id: 2,
                            title: "Açıklama",
                            description: "Platon’a göre duyularla algıladığımız dünya, gerçek dünyanın yalnızca bir kopyasıdır. Gerçeklik, değişmeyen ve mükemmel olan “İdealar Dünyası”ndadır (adalet, güzellik gibi kavramlar). Devlet adlı eserinde, toplumun en bilgili kişileri olan filozof kralların yönetmesi gerektiğini savunur. Ayrıca ruhun ölümsüz olduğuna inanır."
                        }
                    ],
                    pic: platon,
                    span: "Silanion tarafından Akademi için yapılmış büstün Roma dönemi kopyası (y. MÖ 370)",
                    hrefs: [
                        {
                            id: 1,
                            title: "Capitol Müzesi",
                            href: "https://tr.wikipedia.org/wiki/Capitol_Müzesi"
                        }
                    ]
                },
            ],
        },
        {
            id: 2,
            age: "middle",
            title: "🕯️ Orta Çağ Felsefesi",
            philosophers: [
                {
                    id: "augustinus",
                    title: "Augustinus (M.S. 354–430, Roma İmparatorluğu)",
                    list: [
                        {
                            id: 1,
                            title: "Temel Düşünceleri",
                            description: "İnanç ve Akıl, Tanrı’nın Lütfu"
                        },
                        {
                            id: 2,
                            title: "Açıklama",
                            description: "Hristiyanlık felsefesinin önemli bir figürüdür. Platon’un fikirlerini Hristiyanlıkla birleştirmiştir. İnsan doğasının günahkâr olduğunu, ancak Tanrı’nın lütfuyla kurtuluşun mümkün olduğunu savunur. Tanrı’ya olan inanç akıl yoluyla da desteklenebilir der."
                        }
                    ],
                    pic: augustinus,
                    span: null,
                    hrefs: [
                        {
                            id: 1,
                            title: "Kilise Babası",
                            href: "https://tr.wikipedia.org/wiki/Kilise_Babası"
                        },
                        {
                            id: 2,
                            title: "Kilise Doktoru",
                            href: "https://tr.wikipedia.org/wiki/Kilise_Doktoru"
                        }
                    ]
                },
                {
                    id: "aquinas",
                    title: "Thomas Aquinas (M.S. 1225–1274, İtalya)",
                    list: [
                        {
                            id: 1,
                            title: "Temel Düşünceleri",
                            description: "İnanç ile Akıl Arasındaki Uyum, Doğal Hukuk"
                        },
                        {
                            id: 2,
                            title: "Açıklama",
                            description: "Aristoteles’in fikirlerini Hristiyanlıkla sentezlemiştir. Ona göre akıl, Tanrı’yı anlamakta kullanılabilir. Summa Theologica adlı eserinde Tanrı’nın varlığını beş kanıtla açıklamaya çalışır. Ayrıca insanların doğasında var olan “doğal yasaların” Tanrı’nın yasasıyla uyumlu olduğunu belirtir."
                        }
                    ],
                    pic: aquinas,
                    span: null,
                    hrefs: [
                        {
                            id: 1,
                            title: "Kilise Doktoru",
                            href: "https://tr.wikipedia.org/wiki/Kilise_Doktoru"
                        }
                    ]
                },
            ]
        },
        {
            id: 3,
            age: "modern",
            title: "⚙️ Modern Felsefe",
            philosophers: [
                {
                    id: "descartes",
                    title: "René Descartes (1596–1650, Fransa)",
                    list: [
                        {
                            id: 1,
                            title: "Temel Düşünceleri",
                            description: "Kartezyen Şüphecilik, Düşünüyorum Öyleyse Varım, Zihin-Beden İkiliği"
                        },
                        {
                            id: 2,
                            title: "Açıklama",
                            description: "Descartes, kesin bilgiye ulaşmak için her şeyden şüphe etmek gerektiğini savunmuştur. Bu süreçte ulaştığı ilk kesin sonuç: “Düşünüyorum, öyleyse varım” (Cogito, ergo sum) ifadesidir. Ayrıca, ruh ve bedenin ayrı şeyler olduğunu savunan zihin-beden ikiliği ile tanınır. Ona göre ruh düşünür, beden uzam kaplar."
                        }
                    ],
                    pic: descartes,
                    span: "Frans Hals'dan sonraki portresi.",
                    hrefs: [
                        {
                            id: 1,
                            title: "Frans Hals",
                            href: "https://tr.wikipedia.org/wiki/Frans_Hals"
                        }
                    ]
                },
                {
                    id: "kant",
                    title: "Immanuel Kant (1724–1804, Almanya)",
                    list: [
                        {
                            id: 1,
                            title: "Temel Düşünceleri",
                            description: "Ahlaki Yasalar, Saf Aklın Eleştirisi, Görev Etiği"
                        },
                        {
                            id: 2,
                            title: "Açıklama",
                            description: `Kant, hem akıl hem deneyimin bilgide rol oynadığını savunmuştur. Saf Aklın Eleştirisi adlı eserinde, dünyayı nasıl algıladığımızı sorgular. Ahlaki düşüncesinde ise "ödev ahlakı" öne çıkar: Bir eylem, sonuçlarına göre değil, ahlaki yasa ile uyumlu olduğu için yapılmalıdır. “Kategorik Imperatif” dediği ilkeye göre, bir davranış herkes tarafından yapılabilir olmalı.`
                        }
                    ],
                    pic: kant,
                    span: "40'lı yaşlarında Kant, 1768",
                    hrefs: null
                },
                {
                    id: "hegel",
                    title: "Georg Wilhelm Friedrich Hegel (1770–1831, Almanya)",
                    list: [
                        {
                            id: 1,
                            title: "Temel Düşünceleri",
                            description: "Diyalektik, Mutlak Ruh, Tarihin Mantığı"
                        },
                        {
                            id: 2,
                            title: "Açıklama",
                            description: `Hegel’e göre tarih, tez–antitez–sentez üçlemesiyle ilerler. İnsanlık, düşünsel olarak gelişen bir süreç içindedir ve bu süreçte her fikir karşıtıyla çatışır, sonunda yeni bir sentez doğar. Ona göre tüm gerçeklik, Mutlak Ruh’un kendini gerçekleştirmesidir.`
                        }
                    ],
                    pic: hegel,
                    span: "Hegel'in, Jakob Schlesinger tarafından yapılmış 1831 tarihli portresi",
                    hrefs: [
                        {
                            id: 1,
                            title: "Jakob Schlesinger",
                            href: "https://tr.wikipedia.org/wiki/Jakob_Schlesinger"
                        }
                    ]
                },
                {
                    id: "marx",
                    title: "Karl Marx (1818–1883, Almanya)",
                    list: [
                        {
                            id: 1,
                            title: "Temel Düşünceleri",
                            description: "Tarihsel Materyalizm, Sınıf Mücadelesi, Emek-Değer Teorisi"
                        },
                        {
                            id: 2,
                            title: "Açıklama",
                            description: `Marx’a göre tarih, üretim araçlarına sahip olanlar ile olmayanlar arasındaki çatışmalarla şekillenir. Kapitalist sistemde işçi sınıfı (proletarya), burjuvazi tarafından sömürülmektedir. Toplumun eşit olması için özel mülkiyetin kaldırılması ve sınıfsız bir toplum kurulması gerektiğini savunmuştur. Felsefesine “diyalektik materyalizm” adı verilir.`
                        }
                    ],
                    pic: marx,
                    span: "1875'te Karl Marx",
                    hrefs: null
                }
            ]
        },
        {
            id: 3,
            age: "cagdas",
            title: "🎭 Çağdaş Felsefe",
            philosophers: [
                {
                    id: "nietzsche",
                    title: "Friedrich Nietzsche (1844–1900, Almanya)",
                    list: [
                        {
                            id: 1,
                            title: "Temel Düşünceleri",
                            description: "Tanrı'nın Ölümü, Üstinsan (Übermensch), Ahlakın Eleştirisi"
                        },
                        {
                            id: 2,
                            title: "Açıklama",
                            description: `Nietzsche, geleneksel ahlak anlayışını eleştirmiştir. “Tanrı öldü” sözüyle, modern toplumun artık dine ihtiyaç duymadığını, ancak bu boşluğun anlam krizine yol açabileceğini belirtmiştir. Ona göre insan, kendi değerlerini yaratmalı ve “üstinsan” olma yolunda ilerlemelidir. Güç istemi (will to power) felsefesinin merkezindedir.`
                        }
                    ],
                    pic: nietzsche,
                    span: "Nietzsche, Basel'de, 1875.",
                    hrefs: [
                        {
                            id: 1,
                            title: "Basel",
                            href: "https://tr.wikipedia.org/wiki/Basel"
                        }
                    ]
                },
                {
                    id: "locke",
                    title: "John Locke (1632–1704, İngiltere)",
                    list: [
                        {
                            id: 1,
                            title: "Temel Düşünceleri",
                            description: "Tanrı'nın Ölümü, Üstinsan (Übermensch), Ahlakın Eleştirisi"
                        },
                        {
                            id: 2,
                            title: "Açıklama",
                            description: `John Locke, modern liberal düşüncenin ve deneyci felsefenin kurucularından biridir. Ona göre, insanlar doğuştan bilgiye sahip değildir. Aklımız, doğduğumuzda boş bir levha gibidir — buna "tabula rasa" denir. Tüm bilgilerimiz, duyularımız yoluyla edindiğimiz deneyimlerden gelir.

Siyaset felsefesinde Locke, insanların doğuştan sahip olduğu üç temel hak olduğunu söyler:
Yaşam, özgürlük ve mülkiyet. Bu hakları korumak için insanlar bir toplum sözleşmesi yaparak devleti kurarlar. Ancak, devlet bu hakları ihlal ederse halkın onu devirme hakkı vardır. Bu düşünceler, özellikle Amerikan ve Fransız devrimlerini büyük ölçüde etkilemiştir.`
                        }
                    ],
                    pic: locke,
                    span: "John Locke",
                    hrefs: null
                }
            ]
        }

    ]

    return (

        <main>

            {philosophers.map((item, index) => (

                <div id={item.age} className='page' key={index}>

                    <h2>{item.title}</h2>

                    {item.philosophers.map((each, index) => (

                        <Each item={each} length={item.philosophers.length} index={index} key={index} />

                    ))}

                </div>
            
            ))}

        </main>

    )

}