import Each from "../../index-components/each/Each"
import "./Main.css"
import socrates from '../../assets/Socrates_Louvre.jpg.webp'
import mevlana from '../../assets/mevlana.jpg'
import william from '../../assets/250px-William_James_b1842c.jpg'
import kant from '../../assets/Immanuel_Kant_-_Gemaelde_1.jpg.webp'
import aristo from '../../assets/Aristotle_Altemps_Inv8575.jpg.webp'
import hobbes from '../../assets/Aristotle_Altemps_Inv8575.jpg.webp'
import bentham from '../../assets/250px-Jeremy_Bentham_by_Henry_William_Pickersgill_detail.jpg'
import aristippos from '../../assets/250px-Aristippus.jpg'
import nietzsche from '../../assets/Nietzsche187a.jpg.webp'

export default function Main() {

    const etiks = [{
        "id": 1,
        "age": "modern",
        "title": "💡 Etik Felsefesi Temel Teoriler",
        "philosophers": [
            {
                "id": "egoism",
                "title": "Egoizm - Thomas Hobbes ve Max Stirner",
                "list": [
                    {
                        "id": 1,
                        "title": "Temel Düşünceleri",
                        "description": "Bireyin kendi çıkarları ahlakın merkezindedir ve evrensel ahlak yasaları reddedilir."
                    },
                    {
                        "id": 2,
                        "title": "Açıklama",
                        "description": "Egoizm, bireyin kendi çıkarlarını en üst düzeyde tutması gerektiğini savunan etik bir görüştür. Bu akıma göre, bireylerin ahlaki davranışlarının temel motivasyonu kendi faydasıdır. Thomas Hobbes, insan doğasının temelde bencil olduğunu ve toplumun düzeninin ancak herkesin kendi çıkarlarını koruma arzusu sayesinde sağlanabileceğini ileri sürmüştür. Max Stirner ise bireysel özgürlüğü ve egoyu merkeze alan radikal bir egoizm anlayışı geliştirmiştir. Egoizm, evrensel bir ahlak yasasını reddeder; çünkü her bireyin çıkarları farklıdır ve bu çıkarların evrensel kurallarla kısıtlanması mümkün değildir."
                    }
                ],
                "pic": hobbes,
                "span": "Egoizm, bireysel çıkarı ön planda tutar.",
                "hrefs": [
                    {
                        "id": 1,
                        "title": "Egoizm - Vikipedi",
                        "href": "https://tr.wikipedia.org/wiki/Egoizm"
                    },
                    {
                        "id": 2,
                        "title": "Thomas Hobbes",
                        "href": "https://tr.wikipedia.org/wiki/Thomas_Hobbes"
                    }
                ]
            },
            {
                "id": "subjectivism",
                "title": "Öznel Temele Dayandıranlar - Bentham, Mill, Bergson",
                "list": [
                    {
                        "id": 1,
                        "title": "Temel Düşünceleri",
                        "description": "Ahlak bireysel duygu ve deneyimlere bağlıdır, evrensel ahlak yasaları reddedilir."
                    },
                    {
                        "id": 2,
                        "title": "Açıklama",
                        "description": "Bu görüşe göre ahlak, bireyin kendi algı ve hislerine dayanır. Jeremy Bentham, Henri Bergson ve John Stuart Mill gibi filozoflar, ahlakın temelini bireysel haz ve mutluluk olarak görürler. Bentham’ın faydacılık anlayışı, eylemlerin sonuçlarına göre değerlendirilmesini savunur. Bergson ise hayatın akışkan ve değişken doğasını vurgulayarak, ahlakın sabit kurallardan çok durumlara bağlı olduğunu belirtir. Bu yaklaşımlar, ahlakın objektif ve evrensel değil, bireysel deneyimlere ve seçimlere bağlı olduğunu kabul eder."
                    }
                ],
                "pic": bentham,
                "span": "Ahlak, bireyin öznel algılarına bağlıdır.",
                "hrefs": [
                    {
                        "id": 1,
                        "title": "Öznel Etik - Vikipedi",
                        "href": "https://tr.wikipedia.org/wiki/Öznel_etik"
                    }
                ]
            },
            {
                "id": "hedonism",
                "title": "Hedonizm - Aristippos ve Epikür",
                "list": [
                    {
                        "id": 1,
                        "title": "Temel Düşünceleri",
                        "description": "Hayatın amacı haz almak ve acıdan kaçınmaktır; ahlakın ölçütü hazdır."
                    },
                    {
                        "id": 2,
                        "title": "Açıklama",
                        "description": "Hedonizm, haz ve mutluluğun yaşamın en yüksek amacı olduğunu savunan etik teoridir. Aristippos, haz peşinde koşmanın insanın doğası gereği olduğunu ileri sürmüştür. Epikür ise hazın akılcı bir şekilde yönetilmesi gerektiğini vurgulamış, aşırı zevk arayışının mutsuzluğa yol açabileceğini belirtmiştir. Hedonist görüş, eylemlerin değerini aldıkları haz ve acıya göre ölçer. Bu akımda ahlak, kişisel zevklerin ve acıların dengelenmesiyle şekillenir, ancak Epikür’ün anlayışında uzun vadeli tatmin ve huzur ön plandadır."
                    }
                ],
                "pic": aristippos,
                "span": "Haz ve mutluluk, ahlakın temel ölçütüdür.",
                "hrefs": [
                    {
                        "id": 1,
                        "title": "Hedonizm - Vikipedi",
                        "href": "https://tr.wikipedia.org/wiki/Hedonizm"
                    }
                ]
            },
            {
                "id": "anarchism",
                "title": "Anarşizm - Friedrich Nietzsche ve Jean-Paul Sartre",
                "list": [
                    {
                        "id": 1,
                        "title": "Temel Düşünceleri",
                        "description": "Evrensel ahlak yasaları reddedilir; bireysel özgürlük ve kendi değerlerini yaratmak ön plandadır."
                    },
                    {
                        "id": 2,
                        "title": "Açıklama",
                        "description": "Anarşizm, merkezi otoriteyi ve devlet baskısını reddederek bireysel özgürlük ve özerkliği önceler. Friedrich Nietzsche, bu akımın etkili düşünürlerinden biridir ve geleneksel ahlak anlayışlarını eleştirerek bireyin kendi değerlerini yaratması gerektiğini savunur. Jean-Paul Sartre ise varoluşçu anarşizmi temsil eder; ona göre insanlar önceden belirlenmiş bir doğaya sahip olmayıp, kendi seçimleriyle anlam ve değer yaratırlar. Anarşizm, evrensel ahlak yasalarından ziyade bireysel özgürlük ve sorumluluk kavramlarına vurgu yapar."
                    }
                ],
                "pic": nietzsche,
                "span": "Bireysel özgürlük ve değer yaratımı ön plandadır.",
                "hrefs": [
                    {
                        "id": 1,
                        "title": "Anarşizm - Vikipedi",
                        "href": "https://tr.wikipedia.org/wiki/Anarşizm"
                    },
                    {
                        "id": 2,
                        "title": "Friedrich Nietzsche",
                        "href": "https://tr.wikipedia.org/wiki/Friedrich_Nietzsche"
                    },
                    {
                        "id": 3,
                        "title": "Jean-Paul Sartre",
                        "href": "https://tr.wikipedia.org/wiki/Jean-Paul_Sartre"
                    }
                ]
            },
            {
                "id": "objective_ethics",
                "title": "Nesnel Temele Dayandıranlar - Sokrates, Platon, Farabi, Spinoza, Kant",
                "list": [
                    {
                        "id": 1,
                        "title": "Temel Düşünceleri",
                        "description": "Ahlak, evrensel ve nesnel gerçeklere dayanır; herkes için geçerli ve değişmezdir."
                    },
                    {
                        "id": 2,
                        "title": "Açıklama",
                        "description": "Bu grup, ahlakın nesnel ve evrensel temellere dayanması gerektiğini savunur. Sokrates, Platon, Farabi, Spinoza ve Kant gibi filozoflar, ahlakın sadece bireysel algılar veya duygular değil, akıl ve mantık yoluyla keşfedilebilen evrensel ilkeler içerdiğini ileri sürmüşlerdir. Örneğin Kant, “kategorik imperatif” ile her eylemin evrensel bir yasa olabilecek şekilde yapılması gerektiğini belirtir. Platon ise idealar dünyasında değişmeyen erdem ve adalet kavramlarının var olduğunu savunur. Bu anlayış, ahlakın subjektif tercihlerden bağımsız olarak doğru ya da yanlış olduğunu kabul eder."
                    }
                ],
                "pic": socrates,
                "span": "Evrensel ve nesnel ahlak kuralları savunulur.",
                "hrefs": [
                    {
                        "id": 1,
                        "title": "Immanuel Kant",
                        "href": "https://tr.wikipedia.org/wiki/Immanuel_Kant"
                    }
                ]
            },
            {
                "id": "religious_ethics",
                "title": "Din ile Temellendirenler - Yunus Emre, Mevlana, Sühreverdi",
                "list": [
                    {
                        "id": 1,
                        "title": "Temel Düşünceleri",
                        "description": "Ahlak, ilahi buyruklara dayanır ve Tanrı'nın iradesiyle belirlenir."
                    },
                    {
                        "id": 2,
                        "title": "Açıklama",
                        "description": "Bazı etik görüşler, ahlakın kaynağını dini inançlarda görür. Yunus Emre, Mevlana ve Suhreverdi gibi düşünürler, ahlakın Tanrı’nın buyruğuna ve manevi değerlere dayandığını savunurlar. Bu anlayışta etik, sadece insan davranışlarının düzenlenmesi değil, aynı zamanda ruhun temizlenmesi ve ilahi aşkın yüceltilmesidir. Din temelli etik, evrensel ve değişmez ilkelere inanır ve insanın bu ilkelere uygun yaşaması gerektiğini vurgular."
                    }
                ],
                "pic": mevlana,
                "span": "Ahlak, Tanrı'nın iradesine dayanır.",
                "hrefs": [
                    {
                        "id": 1,
                        "title": "Mevlana Celaleddin Rumi",
                        "href": "https://tr.wikipedia.org/wiki/Mevlana_Celaleddin_Rumi"
                    }
                ]
            },
            {
                "id": "utilitarianism",
                "title": "Faydacılık (Utilitarianism) - William James, John Dewey",
                "list": [
                    {
                        "id": 1,
                        "title": "Temel Düşünceleri",
                        "description": "Eylemlerin doğruluğu, en fazla sayıda insan için en büyük mutluluğu sağlamasıdır."
                    },
                    {
                        "id": 2,
                        "title": "Açıklama",
                        "description": "William James ve John Dewey gibi pragmatik filozoflar tarafından geliştirilen faydacılık türleri, etik kararların toplumsal yarar ve işlevsellik açısından değerlendirilmesi gerektiğini savunur. Bu görüş, ahlakın toplumun genel refahını ve işleyişini artırmaya yönelik pratik çözümler bulması gerektiğini belirtir. Bireysel mutluluğun yanı sıra, toplumun ilerlemesi ve ortak fayda ön plandadır. Utilitarizm, etik anlayışı esnek ve duruma bağlı olarak yorumlayabilir."
                    }
                ],
                "pic": william
                ,
                "span": "Faydacılık, sonuç odaklı etik anlayıştır.",
                "hrefs": [
                    {
                        "id": 1,
                        "title": "Faydacılık - Vikipedi",
                        "href": "https://tr.wikipedia.org/wiki/Faydac%C4%B1l%C4%B1k"
                    }
                ]
            }
        ]
    }

    ]

    return (

        <main className="etik-main">

            {etiks?.map((item, index) => (

                <div id={item.age} className='page' key={index}>

                    <h2>{item.title}</h2>

                    {/* <p>{item.description}</p> */}

                    {item.philosophers.map((each, index) => (

                        <Each item={each} length={item.philosophers.length} index={index} key={index} />

                    ))}

                </div>

            ))}

        </main>

    )

}