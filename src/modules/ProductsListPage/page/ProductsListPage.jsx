import React, { useState, useMemo, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import ProductCard from "../components/ProductCard/ProductCard";
import nmcCatalog from "../data";
import {
  PageWrapper,
  Hero,
  HeroInner,
  HeroLeft,
  Eyebrow,
  HeroTitle,
  HeroSub,
  HeroRight,
  Stat,
  StatNum,
  StatLabel,
  SearchBar,
  SearchBarInner,
  SearchInput,
  SearchCount,
  CatNavScrollWrapper,
  CatNav,
  CatTab,
  CatDot,
  SectionHead,
  SectionLabel,
  SectionLine,
  BrandHead,
  BrandHeadName,
  BrandDivider,
  LayoutGrid,
  MainContent,
  MobileFilterToggle,
  BackLink,
} from "./ProductsListPage.styles";
import { Filter, ArrowLeft } from "lucide-react";
import FilterSidebar from "../components/FiltersSideBar/FilterSidebar";

const { categories, products, brandCount } = nmcCatalog;

function brandsFor(cat) {
  const seen = new Set();
  const list = [];
  products
    .filter((p) => p.category === cat)
    .forEach((p) => {
      if (!seen.has(p.brand)) { seen.add(p.brand); list.push(p.brand); }
    });
  return list;
}

const Products = () => {
  const location = useLocation();
  const [activeFilter, setActiveFilter] = useState(location.state?.category || "all");
  const [search, setSearch] = useState("");
  const [activeFacets, setActiveFacets] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    document.title="All Products | NMC Cinemas"
  }, [])

  // Sync state if navigating from footer
  useEffect(() => {
    if (location.state?.category) {
      setActiveFilter(location.state.category);
      setActiveFacets({});
    }
  }, [location.state?.category]);

  // Clear facets when category changes
  const handleCategoryChange = (catId) => {
    setActiveFilter(catId);
    setActiveFacets({});
  };

  const handleFacetChange = (groupKey, updatedSet) => {
    setActiveFacets((prev) => {
      const newFacets = { ...prev };
      if (updatedSet.size === 0) {
        delete newFacets[groupKey];
      } else {
        newFacets[groupKey] = updatedSet;
      }
      return newFacets;
    });
  };

  const clearAllFacets = () => {
    setActiveFacets({});
  };

  const visibleCategories = useMemo(
    () => (activeFilter === "all" ? categories : categories.filter((c) => c.id === activeFilter)),
    [activeFilter]
  );

  const filteredProducts = useMemo(() => {
    const q = search.toLowerCase();
    
    // First, filter by category
    let baseProducts = products;
    if (activeFilter !== "all") {
      baseProducts = baseProducts.filter(p => p.category === activeFilter);
    }

    // Then, filter by keyword search
    if (q) {
      baseProducts = baseProducts.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    // Finally, filter by active facets
    const facetKeys = Object.keys(activeFacets);
    if (facetKeys.length > 0) {
      baseProducts = baseProducts.filter((p) => {
        // Must match EVERYTHING (AND logic between groups)
        return facetKeys.every((key) => {
          const allowedValues = activeFacets[key];
          
          if (key === "brand") {
            return allowedValues.has(p.brand);
          }

          // Safe check for dynamic filters object
          const pVal = p.filters?.[key];
          if (pVal === undefined) return false;
          
          return allowedValues.has(pVal);
        });
      });
    }

    return baseProducts;
  }, [search, activeFilter, activeFacets]);

  const visibleCount = filteredProducts.length;

  return (
    <PageWrapper>
      {/* ── hero ── */}
      <Hero>
        <div className="container">
          <BackLink to="/" style={{ marginBottom: "2rem" }}>
            <ArrowLeft size={14} /> Back to Home
          </BackLink>
          <HeroInner>
            <HeroLeft>
              <Eyebrow>Official Catalog 2025</Eyebrow>
              <HeroTitle>
                NMC<br />
                <span style={{ color: "var(--accent)" }}>Home</span><br />
                Cinemas
              </HeroTitle>
              <HeroSub>Where Sound Becomes Experience</HeroSub>
            </HeroLeft>

            <HeroRight>
              <Stat>
                <StatNum>{categories.length}</StatNum>
                <StatLabel>Categories</StatLabel>
              </Stat>
              <Stat>
                <StatNum>{brandCount}</StatNum>
                <StatLabel>Brands</StatLabel>
              </Stat>
              <Stat>
                <StatNum>{products.length}+</StatNum>
                <StatLabel>Products</StatLabel>
              </Stat>
            </HeroRight>
          </HeroInner>
        </div>
      </Hero>

      {/* ── search ── */}
      <SearchBar>
        <div className="container">
          <SearchBarInner>
            <SearchInput
              type="text"
              placeholder="Search products, brands, models…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <SearchCount>
              {visibleCount} product{visibleCount !== 1 ? "s" : ""}
            </SearchCount>
          </SearchBarInner>
        </div>
      </SearchBar>

      {/* ── category tabs ── */}
      <CatNavScrollWrapper>
        <div className="container">
          <CatNav>
            <CatTab
              active={activeFilter === "all"}
              color="var(--accent)"
              onClick={() => handleCategoryChange("all")}
            >
              <CatDot active={activeFilter === "all"} color="var(--accent)" />
              All
            </CatTab>
            {categories.map((cat) => (
              <CatTab
                key={cat.id}
                active={activeFilter === cat.id}
                color={cat.color}
                onClick={() => handleCategoryChange(cat.id)}
              >
                <CatDot active={activeFilter === cat.id} color={cat.color} />
                {cat.label}
              </CatTab>
            ))}
          </CatNav>
        </div>
      </CatNavScrollWrapper>

      {/* ── layout grid for catalog ── */}
      <div className="container">
        <LayoutGrid>
          {/* Sidebar */}
          <FilterSidebar
            products={products.filter((p) => activeFilter === "all" || p.category === activeFilter)}
            activeFacets={activeFacets}
            onFacetChange={handleFacetChange}
            clearAllFacets={clearAllFacets}
            accentColor={activeFilter === "all" ? "var(--accent)" : categories.find(c => c.id === activeFilter)?.color}
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
          />

          <MainContent>
            {/* Mobile Filter Toggle Button */}
            <MobileFilterToggle onClick={() => setIsSidebarOpen(true)}>
              <Filter size={14} /> Filter Products
            </MobileFilterToggle>

            {/* Catalog sections */}
            {visibleCategories.map((cat) => {
              const catProducts = filteredProducts.filter((p) => p.category === cat.id);
              if (!catProducts.length) return null;

              const brands = brandsFor(cat.id).filter((b) =>
                catProducts.some((p) => p.brand === b)
              );

              return (
                <div key={cat.id} style={{ marginBottom: "2rem" }}>
                  <SectionHead>
                    <SectionLabel color={cat.color}>{cat.label}</SectionLabel>
                    <SectionLine color={cat.color} />
                  </SectionHead>

                  {brands.map((brand) => {
                    const brandProducts = catProducts.filter((p) => p.brand === brand);
                    if (!brandProducts.length) return null;

                    return (
                      <div key={brand} style={{ marginBottom: "2rem" }}>
                        <BrandHead>
                          <BrandHeadName>{brand}</BrandHeadName>
                          <BrandDivider />
                        </BrandHead>

                        {/* Standard Bootstrap Grid for the Products */}
                        <div className="row g-4">
                          {brandProducts.map((product) => (
                            <div className="col-6 col-sm-4" key={`${product.brand}-${product.name}`}>
                              <ProductCard
                                product={product}
                                accentColor={cat.color}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </MainContent>
        </LayoutGrid>
      </div>
    </PageWrapper>
  );
};

export default Products;
