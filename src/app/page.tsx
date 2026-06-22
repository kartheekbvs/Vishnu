"use client";

import { useState, useMemo, useEffect } from "react";
import { dhyanaShlokas, mainStotram, phalashruti, getAllNames } from "@/data/vishnu-stotram";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Search, Bookmark, BookmarkCheck, Type, Sparkles, Flower2, Heart, ChevronUp } from "lucide-react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [bookmarks, setBookmarks] = useState<number[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const saved = localStorage.getItem("vs-bookmarks");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [fontSize, setFontSize] = useState(16);
  const [activeTab, setActiveTab] = useState("stotram");
  const [showScrollTop, setShowScrollTop] = useState(false);

  const allNames = useMemo(() => getAllNames(), []);

  const filteredShlokas = useMemo(() => {
    if (!searchQuery.trim()) return mainStotram;
    const query = searchQuery.toLowerCase();
    return mainStotram.filter(
      (s) =>
        s.telugu.toLowerCase().includes(query) ||
        s.transliteration.toLowerCase().includes(query) ||
        s.teluguMeaning.toLowerCase().includes(query) ||
        s.englishMeaning.toLowerCase().includes(query) ||
        (s.names && s.names.some((n) => n.toLowerCase().includes(query)))
    );
  }, [searchQuery]);

  const filteredNames = useMemo(() => {
    if (!searchQuery.trim()) return allNames.slice(0, 200);
    const query = searchQuery.toLowerCase();
    return allNames.filter((n) => n.name.toLowerCase().includes(query));
  }, [searchQuery, allNames]);

  useEffect(() => {
    try {
      localStorage.setItem("vs-bookmarks", JSON.stringify(bookmarks));
    } catch {
      // ignore storage errors
    }
  }, [bookmarks]);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleBookmark = (id: number) => {
    setBookmarks((prev) =>
      prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id]
    );
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const bookmarkedShlokas = useMemo(
    () => mainStotram.filter((s) => bookmarks.includes(s.id)),
    [bookmarks]
  );

  return (
    <div className="min-h-screen flex flex-col om-pattern" style={{ background: "#FFFAF0" }}>
      {/* Header */}
      <header className="sticky top-0 z-50 maroon-gradient text-white shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-2xl sacred-glow">
                <span className="text-maroon">ॐ</span>
              </div>
              <div>
                <h1 className="font-display text-lg sm:text-xl font-bold tracking-wide">
                  Sri Vishnu Sahasranama
                </h1>
                <p className="font-telugu text-xs sm:text-sm text-yellow-200">
                  శ్రీ విష్ణు సహస్ర నామ స్తోత్రం
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="hidden sm:flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg">
                <Type className="w-4 h-4 text-yellow-300" />
                <button
                  onClick={() => setFontSize((f) => Math.max(12, f - 1))}
                  className="text-sm hover:text-yellow-300"
                >
                  A-
                </button>
                <span className="text-xs text-yellow-200">{fontSize}px</span>
                <button
                  onClick={() => setFontSize((f) => Math.min(24, f + 1))}
                  className="text-sm hover:text-yellow-300"
                >
                  A+
                </button>
              </div>
              <Badge className="bg-yellow-400 text-maroon hover:bg-yellow-300 font-semibold">
                <Heart className="w-3 h-3 mr-1" />
                {bookmarks.length}
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 sm:py-20 px-4">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl">ॐ</div>
          <div className="absolute bottom-10 right-10 text-9xl">🕉️</div>
        </div>
        <div className="container mx-auto relative z-10 text-center">
          <div className="inline-block mb-4">
            <Flower2 className="w-12 h-12 mx-auto text-orange-500 float-animation" />
          </div>
          <p className="font-telugu text-sm sm:text-base text-orange-700 mb-2 tracking-wider">
            ॐ నమో భగవతే వాసుదేవాయ
          </p>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="gold-text">Sri Vishnu Sahasranama Stotram</span>
          </h2>
          <p className="font-telugu text-2xl sm:text-3xl text-maroon font-semibold mb-6">
            శ్రీ విష్ణు సహస్ర నామ స్తోత్రం
          </p>
          <div className="temple-divider w-32 mx-auto mb-6" />
          <p className="font-body text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-4">
            The thousand divine names of Lord Vishnu, sung by Bhishma Pitamaha to Yudhishthira
            in the Anushasana Parva of the Mahabharata. Chant these sacred names with devotion
            to attain peace, prosperity, and spiritual liberation.
          </p>
          <p className="font-telugu text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            అనుశాసన పర్వములో భీష్మ పితామహుడు యుధిష్ఠిరునకు చెప్పిన విష్ణు సహస్ర నామ స్తోత్రం.
            భక్తితో పఠించిన యెడల శాంతి, సంపద, మోక్షము లభించును.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <div className="bg-white/80 backdrop-blur rounded-lg px-4 py-3 shadow-md border border-orange-200">
              <p className="text-2xl font-bold text-maroon">107</p>
              <p className="text-xs text-gray-600">Shlokas</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-lg px-4 py-3 shadow-md border border-orange-200">
              <p className="text-2xl font-bold text-maroon">1000+</p>
              <p className="text-xs text-gray-600">Divine Names</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-lg px-4 py-3 shadow-md border border-orange-200">
              <p className="text-2xl font-bold text-maroon">2</p>
              <p className="text-xs text-gray-600">Languages</p>
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="px-4 py-6 bg-gradient-to-b from-orange-50 to-transparent">
        <div className="container mx-auto max-w-2xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-orange-400" />
            <Input
              type="text"
              placeholder="Search names, shlokas, or meanings... / నామములు, శ్లోకములు వెతకండి"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-6 text-base border-2 border-orange-200 focus:border-orange-400 rounded-xl bg-white/90 shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <main className="flex-1 px-4 pb-12">
        <div className="container mx-auto max-w-5xl">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-8 bg-orange-100">
              <TabsTrigger value="stotram" className="font-semibold data-[state=active]:bg-maroon data-[state=active]:text-white">
                <BookOpen className="w-4 h-4 mr-1" />
                <span className="hidden sm:inline">Stotram</span>
              </TabsTrigger>
              <TabsTrigger value="names" className="font-semibold data-[state=active]:bg-maroon data-[state=active]:text-white">
                <Sparkles className="w-4 h-4 mr-1" />
                <span className="hidden sm:inline">1000 Names</span>
              </TabsTrigger>
              <TabsTrigger value="dhyana" className="font-semibold data-[state=active]:bg-maroon data-[state=active]:text-white">
                <Flower2 className="w-4 h-4 mr-1" />
                <span className="hidden sm:inline">Dhyana</span>
              </TabsTrigger>
              <TabsTrigger value="bookmarks" className="font-semibold data-[state=active]:bg-maroon data-[state=active]:text-white">
                <BookmarkCheck className="w-4 h-4 mr-1" />
                <span className="hidden sm:inline">Saved ({bookmarks.length})</span>
              </TabsTrigger>
            </TabsList>

            {/* Main Stotram Tab */}
            <TabsContent value="stotram" className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-maroon mb-2">
                  Sri Vishnu Sahasranama Stotram
                </h3>
                <p className="font-telugu text-lg text-orange-700">
                  శ్రీ విష్ణు సహస్ర నామ స్తోత్రం - ముఖ్య భాగము
                </p>
                <div className="temple-divider w-24 mx-auto mt-3" />
              </div>
              {filteredShlokas.length === 0 ? (
                <Card className="p-8 text-center">
                  <p className="text-gray-500">No shlokas found matching your search.</p>
                </Card>
              ) : (
                filteredShlokas.map((shloka) => (
                  <ShlokaCard
                    key={shloka.id}
                    shloka={shloka}
                    fontSize={fontSize}
                    isBookmarked={bookmarks.includes(shloka.id)}
                    onBookmark={() => toggleBookmark(shloka.id)}
                  />
                ))
              )}
            </TabsContent>

            {/* Names Browser Tab */}
            <TabsContent value="names" className="space-y-4">
              <div className="text-center mb-8">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-maroon mb-2">
                  1000 Divine Names of Vishnu
                </h3>
                <p className="font-telugu text-lg text-orange-700">
                  విష్ణు సహస్ర నామములు
                </p>
                <div className="temple-divider w-24 mx-auto mt-3" />
              </div>
              {searchQuery && (
                <p className="text-center text-sm text-gray-600 mb-4">
                  Showing {filteredNames.length} names{searchQuery && ` matching "${searchQuery}"`}
                </p>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {filteredNames.map((item, idx) => (
                  <Card
                    key={idx}
                    className="p-4 shloka-card transition-all hover:scale-[1.02] cursor-pointer"
                    onClick={() => {
                      setActiveTab("stotram");
                      setTimeout(() => {
                        document.getElementById(`shloka-${item.shlokaId}`)?.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                        });
                      }, 100);
                    }}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <p className="font-display font-semibold text-maroon text-sm">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          Shloka {item.shlokaId}
                        </p>
                      </div>
                      <Badge variant="outline" className="text-orange-600 border-orange-300 text-xs">
                        #{idx + 1}
                      </Badge>
                    </div>
                  </Card>
                ))}
              </div>
              {!searchQuery && (
                <p className="text-center text-sm text-gray-500 mt-6">
                  Use search above to find all 1000 names. Showing first 200 by default.
                </p>
              )}
            </TabsContent>

            {/* Dhyana Shlokas Tab */}
            <TabsContent value="dhyana" className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-maroon mb-2">
                  Dhyana Shlokas
                </h3>
                <p className="font-telugu text-lg text-orange-700">
                  ధ్యాన శ్లోకములు - పూర్వ పీఠిక
                </p>
                <div className="temple-divider w-24 mx-auto mt-3" />
                <p className="font-body text-sm text-gray-600 max-w-2xl mx-auto mt-4">
                  These meditation verses are chanted before reciting the Sahasranama,
                  invoking Lord Vishnu and removing all obstacles.
                </p>
              </div>
              {dhyanaShlokas.map((shloka) => (
                <ShlokaCard
                  key={shloka.id}
                  shloka={shloka}
                  fontSize={fontSize}
                  isBookmarked={false}
                  onBookmark={() => {}}
                  prefix="dhyana"
                />
              ))}

              {/* Phalashruti */}
              <div className="mt-12">
                <div className="text-center mb-8">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-maroon mb-2">
                    Phalashruti - Benefits
                  </h3>
                  <p className="font-telugu text-lg text-orange-700">
                    ఫలశృతి - పఠన ఫలములు
                  </p>
                  <div className="temple-divider w-24 mx-auto mt-3" />
                  <p className="font-body text-sm text-gray-600 max-w-2xl mx-auto mt-4">
                    The fruits of chanting the Vishnu Sahasranama as described in the scripture.
                  </p>
                </div>
                {phalashruti.map((shloka) => (
                  <ShlokaCard
                    key={shloka.id}
                    shloka={shloka}
                    fontSize={fontSize}
                    isBookmarked={false}
                    onBookmark={() => {}}
                    prefix="phala"
                  />
                ))}
              </div>
            </TabsContent>

            {/* Bookmarks Tab */}
            <TabsContent value="bookmarks" className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-maroon mb-2">
                  Your Saved Shlokas
                </h3>
                <p className="font-telugu text-lg text-orange-700">
                  మీ ఇష్టమైన శ్లోకములు
                </p>
                <div className="temple-divider w-24 mx-auto mt-3" />
              </div>
              {bookmarkedShlokas.length === 0 ? (
                <Card className="p-12 text-center bg-cream">
                  <Bookmark className="w-16 h-16 mx-auto text-orange-300 mb-4" />
                  <p className="font-body text-gray-600 mb-2">No saved shlokas yet</p>
                  <p className="font-telugu text-sm text-gray-500">
                    శ్లోకములను భద్రపరచుకోవడానికి బుక్‌మార్క్ చిహ్నమును నొక్కండి
                  </p>
                  <Button
                    onClick={() => setActiveTab("stotram")}
                    className="mt-6 saffron-gradient text-white hover:opacity-90"
                  >
                    Browse Stotram
                  </Button>
                </Card>
              ) : (
                bookmarkedShlokas.map((shloka) => (
                  <ShlokaCard
                    key={shloka.id}
                    shloka={shloka}
                    fontSize={fontSize}
                    isBookmarked={true}
                    onBookmark={() => toggleBookmark(shloka.id)}
                  />
                ))
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Footer */}
      <footer className="maroon-gradient text-white py-8 px-4 mt-auto">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="mb-4">
            <span className="text-4xl">ॐ</span>
          </div>
          <p className="font-telugu text-sm text-yellow-200 mb-2">
            శ్రీ విష్ణు సహస్ర నామ స్తోత్రం సమాప్తమ్
          </p>
          <p className="font-body text-xs text-yellow-100/80 mb-4">
            ॐ తత్సత్ సర్వం శ్రీ కృష్ణార్పణమస్తు
          </p>
          <div className="temple-divider w-32 mx-auto mb-4" />
          <p className="font-body text-xs text-yellow-100/70">
            Source: Anushasana Parva, Mahabharata | Text: Vaidika Vignanam (Sarala Telugu)
          </p>
          <p className="font-body text-xs text-yellow-100/60 mt-2">
            "యత్ర యోగేశ్వరః కృష్ణో యత్ర పార్థో ధనుర్ధరః । తత్ర శ్రీర్విజయో భూతిర్ధ్రువా నీతిర్మతిర్మమ"
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 rounded-full saffron-gradient text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform z-40"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}

// Shloka Card Component
function ShlokaCard({
  shloka,
  fontSize,
  isBookmarked,
  onBookmark,
  prefix = "shloka",
}: {
  shloka: {
    id: number;
    telugu: string;
    transliteration: string;
    teluguMeaning: string;
    englishMeaning: string;
    names?: string[];
  };
  fontSize: number;
  isBookmarked: boolean;
  onBookmark: () => void;
  prefix?: string;
}) {
  const [showTransliteration, setShowTransliteration] = useState(true);
  const [showMeaning, setShowMeaning] = useState(true);

  return (
    <Card
      id={`${prefix}-${shloka.id}`}
      className="shloka-card rounded-xl overflow-hidden transition-all"
    >
      <div className="bg-gradient-to-r from-orange-500 to-yellow-500 px-4 py-2 flex items-center justify-between">
        <span className="text-white font-display font-bold text-sm">
          {prefix === "dhyana" ? "Dhyana" : prefix === "phala" ? "Phalashruti" : "Shloka"} {shloka.id}
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowTransliteration(!showTransliteration)}
            className="text-white/80 hover:text-white text-xs bg-white/10 px-2 py-1 rounded"
          >
            {showTransliteration ? "Hide" : "Show"} English
          </button>
          <button
            onClick={() => setShowMeaning(!showMeaning)}
            className="text-white/80 hover:text-white text-xs bg-white/10 px-2 py-1 rounded"
          >
            {showMeaning ? "Hide" : "Show"} Meaning
          </button>
          <button
            onClick={onBookmark}
            className="text-white hover:text-yellow-200 transition-colors"
            aria-label="Bookmark"
          >
            {isBookmarked ? (
              <BookmarkCheck className="w-5 h-5" />
            ) : (
              <Bookmark className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      <div className="p-5 sm:p-6">
        {/* Telugu Text */}
        <div className="mb-4 text-center">
          <p
            className="telugu-text text-maroon font-medium verse-text"
            style={{ fontSize: `${fontSize + 2}px` }}
          >
            {shloka.telugu}
          </p>
        </div>

        {/* Transliteration */}
        {showTransliteration && (
          <div className="mb-4 pb-4 border-b border-orange-100">
            <p className="font-body text-gray-700 italic verse-text" style={{ fontSize: `${fontSize - 1}px` }}>
              {shloka.transliteration}
            </p>
          </div>
        )}

        {/* Names List */}
        {shloka.names && shloka.names.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2 justify-center">
            {shloka.names.map((name, idx) => (
              <Badge
                key={idx}
                variant="outline"
                className="bg-yellow-50 text-maroon border-orange-300 font-semibold text-xs"
              >
                {name}
              </Badge>
            ))}
          </div>
        )}

        {/* Meanings */}
        {showMeaning && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-orange-50/50 rounded-lg p-3">
              <p className="text-xs font-semibold text-orange-700 mb-1 flex items-center gap-1">
                <span className="text-base">తె</span> తెలుగు అర్థం
              </p>
              <p className="font-telugu text-sm text-gray-700 leading-relaxed">
                {shloka.teluguMeaning}
              </p>
            </div>
            <div className="bg-yellow-50/50 rounded-lg p-3">
              <p className="text-xs font-semibold text-orange-700 mb-1 flex items-center gap-1">
                <span className="text-base">En</span> English Meaning
              </p>
              <p className="font-body text-sm text-gray-700 leading-relaxed">
                {shloka.englishMeaning}
              </p>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
