import React, { useMemo, useState } from "react";
import { X, ChevronDown, ChevronUp } from "lucide-react";
import {
  SidebarContainer,
  MobileOverlay,
  SidebarHeader,
  SidebarTitle,
  CloseBtn,
  FilterGroup,
  GroupHeader,
  GroupTitle,
  FilterList,
  CheckboxLabel,
  CheckboxInput,
  ClearAllBtn,
} from "./FilterSidebar.styles";

/**
 * Helper to pretty-print camelCase keys into "Title Case"
 */
function formatKey(key) {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());
}

/**
 * FilterSidebar extracts dynamic faceted filters based on the passed products list.
 */
const FilterSidebar = ({
  products,
  activeFacets,
  onFacetChange,
  clearAllFacets,
  accentColor,
  isOpen,
  onClose,
}) => {
  // Compute available filter groups and their distinct values 
  // adaptively based on the OTHER active facets.
  const filterGroups = useMemo(() => {
    const groups = {};

    // 1. Find all possible facet keys across ALL products in this category
    const allKeys = new Set(["brand"]);
    products.forEach((p) => {
      if (p.filters && typeof p.filters === "object") {
        Object.keys(p.filters).forEach((k) => allKeys.add(k));
      }
    });

    // Helper: does a product pass all active facets EXCEPT the ignored key?
    const passesOtherFacets = (product, ignoreKey) => {
      const facetKeys = Object.keys(activeFacets);
      if (facetKeys.length === 0) return true;

      return facetKeys.every((key) => {
        if (key === ignoreKey) return true; // Ignore the group we are calculating for
        
        const allowedValues = activeFacets[key];
        if (key === "brand") {
          return allowedValues.has(product.brand);
        }

        const pVal = product.filters?.[key];
        if (pVal === undefined) return false;
        
        return allowedValues.has(pVal);
      });
    };

    // 2. For each possible key, find the distinct values from the products
    // that pass all OTHER active facets.
    allKeys.forEach((key) => {
      const distinct = new Set();
      
      products.forEach((p) => {
        if (!passesOtherFacets(p, key)) return;
        
        let val;
        if (key === "brand") val = p.brand;
        else val = p.filters?.[key];

        if (val !== undefined && val !== null && val !== "") {
          distinct.add(val);
        }
      });

      if (distinct.size > 0) {
        groups[key] = distinct;
      }
    });

    // 3. Convert Sets to sorted Arrays
    const result = {};
    if (groups["brand"]) result["brand"] = Array.from(groups["brand"]).sort();

    Object.keys(groups).forEach((key) => {
      if (key === "brand") return;
      // Convert true/false booleans or strings to predictable UI arrays
      const arr = Array.from(groups[key]).sort((a, b) => {
        if (typeof a === "boolean" && typeof b === "boolean") {
          return a === b ? 0 : a ? -1 : 1; // True first
        }
        if (typeof a === "number" && typeof b === "number") {
          return a - b;
        }
        return String(a).localeCompare(String(b));
      });
      // Only show filter groups with more than 1 distinct value (unless it's boolean 'true')
      if (arr.length > 1 || typeof arr[0] === "boolean") {
        result[key] = arr;
      }
    });

    return result;
  }, [products]);

  const [openGroups, setOpenGroups] = useState({});

  // Initialize all groups to open by default when filterGroups change
  React.useEffect(() => {
    const initialOpen = Object.keys(filterGroups).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setOpenGroups(initialOpen);
  }, [filterGroups]);

  const toggleGroup = (key) => {
    setOpenGroups((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleCheckbox = (groupKey, value) => {
    const currentSet = activeFacets[groupKey] ? new Set(activeFacets[groupKey]) : new Set();
    
    if (currentSet.has(value)) {
      currentSet.delete(value);
    } else {
      currentSet.add(value);
    }

    onFacetChange(groupKey, currentSet);
  };

  const totalActive = Object.values(activeFacets).reduce((sum, set) => sum + set.size, 0);

  return (
    <>
      <MobileOverlay isOpen={isOpen} onClick={onClose} />
      
      <SidebarContainer isOpen={isOpen}>
        <SidebarHeader showOnDesktop={true}>
          <SidebarTitle>Filters</SidebarTitle>
          <CloseBtn className="d-lg-none" onClick={onClose}>
            <X size={20} />
          </CloseBtn>
        </SidebarHeader>

        {totalActive > 0 && (
          <ClearAllBtn onClick={clearAllFacets}>Clear all ({totalActive})</ClearAllBtn>
        )}

        {Object.entries(filterGroups).map(([groupKey, values]) => {
          const isOpen = openGroups[groupKey];
          const activeSet = activeFacets[groupKey] || new Set();

          return (
            <FilterGroup key={groupKey}>
              <GroupHeader onClick={() => toggleGroup(groupKey)}>
                <GroupTitle>{formatKey(groupKey)}</GroupTitle>
                {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </GroupHeader>
              
              <FilterList isOpen={isOpen}>
                {values.map((val, idx) => {
                  const label = typeof val === "boolean" ? (val ? "Yes" : "No") : val;
                  const isChecked = activeSet.has(val);

                  return (
                    <CheckboxLabel key={idx}>
                      <CheckboxInput
                        type="checkbox"
                        checked={isChecked}
                        color={accentColor}
                        onChange={() => handleCheckbox(groupKey, val)}
                      />
                      {label}
                    </CheckboxLabel>
                  );
                })}
              </FilterList>
            </FilterGroup>
          );
        })}
        
        {Object.keys(filterGroups).length === 0 && (
          <div style={{ fontSize: "0.75rem", color: "var(--color-stone-500)" }}>
            No additional filters available for this category.
          </div>
        )}
      </SidebarContainer>
    </>
  );
};

export default FilterSidebar;
