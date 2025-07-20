const htmlElement = document.createElement('div');
htmlElement.innerHTML = `<div class="authentication-outlet">
<!---->  

  <div id="ember31" class="ember-view"></div>

<div id="ember-semaphore-wormhole"></div>



  <div class="scaffold-layout__tracking-element"></div>

<div class="scaffold-layout
    scaffold-layout--breakpoint-md
    scaffold-layout--list-detail
    
    scaffold-layout--reflow
    scaffold-layout--has-list-detail
     jobs-search-two-pane__layout
    
    
    ">
    <section class="scaffold-layout-toolbar
    
    
    ">
  <div class="scaffold-layout-toolbar__content scaffold-layout-container
      scaffold-layout-container--reflow
      ">
    
      
    
    
  <section aria-label="search filters" class="search-filters-bar--jobs-search relative p0
      ">
    <h2 class="a11y-text">
      Jobs search
    </h2>
    <div class="grid grid--no-gutters">
      <div class="search-filters-bar display-flex align-items-center grid__col">
            
    <div id="search-reusables__filters-bar" class="search-reusables__filters-bar-grouping full-width">
          <ul class="search-reusables__filter-list
              ">
                      <li class="search-reusables__primary-filter">
                        
    <div id="ember139" class="artdeco-dropdown artdeco-dropdown--placement-bottom artdeco-dropdown--justification-left ember-view search-reusables__navigation-filter-dropdown">
      <button aria-expanded="false" aria-label=" Filter by: Jobs" id="navigational-filter_resultType" class="artdeco-dropdown__trigger artdeco-dropdown__trigger--placement-bottom ember-view artdeco-pill artdeco-pill--slate artdeco-pill--choice artdeco-pill--2 search-reusables__filter-pill-button artdeco-pill--selected cursor-pointer" type="button" tabindex="0">
<!---->        Jobs
        <svg role="none" aria-hidden="true" class="navigational-filter-dropdown__caret-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="caret-small">
<!---->    
    <use href="#caret-small" width="16" height="16"></use>
</svg>

      
<!----></button>

      <div tabindex="-1" aria-hidden="true" id="ember141" class="artdeco-dropdown__content artdeco-dropdown--is-dropdown-element artdeco-dropdown__content--justification-left artdeco-dropdown__content--placement-bottom ember-view p0"><!----></div>
    </div>
  
                      </li>
                        <li class="search-reusables__filter-vertical-divider"></li>
                      <li class="search-reusables__primary-filter">
                          
    <div class="search-reusables__filter-trigger-and-dropdown" data-basic-filter-parameter-name="timePostedRange">
        <div id="hoverable-outlet-date-posted-filter-value">  <div id="artdeco-hoverable-artdeco-gen-42" class="artdeco-hoverable-content reusable-search-filters-trigger-dropdown__content artdeco-hoverable-content--inverse-theme artdeco-hoverable-content--default-spacing artdeco-hoverable-content--undefined-placement" tabindex="-1" role="tooltip" aria-hidden="true">
    <div class="artdeco-hoverable-content__shell">
        <button class="artdeco-hoverable-content__close-btn" aria-label="Dismiss" type="button">
          <li-icon aria-hidden="true" type="cancel-icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
      <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
    </svg></li-icon>
        </button>
      <div class="artdeco-hoverable-content__content">
        
            <form>
              <fieldset class="reusable-search-filters-trigger-dropdown__container">
                <legend class="a11y-text">
                  Filter results by: Date posted
                </legend>
                  <div class="pl4 pr6">
                    <!---->
                    
    <ul class="list-style-none relative search-reusables__collection-values-container search-reusables__collection-values-container--50vh">
          <li class="search-reusables__collection-values-item">
            <input name="date-posted-filter-value" id="timePostedRange-" class="search-reusables__select-input" type="radio">
            <label for="timePostedRange-" class="search-reusables__value-label">
              <p class="display-flex">
                <span class="t-14 t-black--light t-normal" aria-hidden="true">
                  Any time
                </span>
                <span class="visually-hidden">
                    Filter by Any time
                </span>
<!---->              </p>
            </label>
<!---->          </li>
          <li class="search-reusables__collection-values-item">
            <input name="date-posted-filter-value" id="timePostedRange-r2592000" class="search-reusables__select-input" type="radio" value="r2592000">
            <label for="timePostedRange-r2592000" class="search-reusables__value-label">
              <p class="display-flex">
                <span class="t-14 t-black--light t-normal" aria-hidden="true">
                  Past month
                </span>
                <span class="visually-hidden">
                    Filter by Past month
                </span>
<!---->              </p>
            </label>
<!---->          </li>
          <li class="search-reusables__collection-values-item">
            <input name="date-posted-filter-value" id="timePostedRange-r604800" class="search-reusables__select-input" type="radio" value="r604800">
            <label for="timePostedRange-r604800" class="search-reusables__value-label">
              <p class="display-flex">
                <span class="t-14 t-black--light t-normal" aria-hidden="true">
                  Past week
                </span>
                <span class="visually-hidden">
                    Filter by Past week
                </span>
<!---->              </p>
            </label>
<!---->          </li>
          <li class="search-reusables__collection-values-item">
            <input name="date-posted-filter-value" id="timePostedRange-r86400" class="search-reusables__select-input" type="radio" value="r86400">
            <label for="timePostedRange-r86400" class="search-reusables__value-label">
              <p class="display-flex">
                <span class="t-14 t-black--light t-normal" aria-hidden="true">
                  Past 24 hours
                </span>
                <span class="visually-hidden">
                    Filter by Past 24 hours
                </span>
<!---->              </p>
            </label>
<!---->          </li>
      
    </ul>
  
                    <!---->
                  </div>
                  <hr class="reusable-search-filters__divider m0 mt3">
                  
    <div class="reusable-search-filters-buttons display-flex justify-flex-end mt3 ph2">
          
  <button aria-label="Cancel Date posted filter" id="ember145" class="artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view" type="button"><!---->
<span class="artdeco-button__text">
    
    Cancel
  
</span></button>

          
  <button aria-label="Apply current filter to show results" id="ember146" class="artdeco-button artdeco-button--2 artdeco-button--primary ember-view ml2" type="button"><!---->
<span class="artdeco-button__text">
    
    
            Show results
          
  
</span></button>

    </div>
  
              </fieldset>
            </form>
        
      </div>
    </div>
    <div class="artdeco-hoverable-content__arrow" aria-hidden="true"></div>
  </div>
</div>
      <span tabindex="-1" id="ember142" class="artdeco-hoverable-trigger artdeco-hoverable-trigger--content-placed-bottom ember-view">
        
  <button class="artdeco-pill artdeco-pill--slate artdeco-pill--choice artdeco-pill--2 search-reusables__filter-pill-button
       reusable-search-filter-trigger-and-dropdown__trigger" id="searchFilter_timePostedRange" aria-controls="artdeco-hoverable-artdeco-gen-42" aria-expanded="false" aria-label="Date posted filter. Clicking this button displays all Date posted filter options." type="button">
    
<!---->            Date posted
<!---->          <svg role="none" aria-hidden="true" class="search-reusables__pill-button-caret-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="caret-small">
<!---->    
    <use href="#caret-small" width="16" height="16"></use>
</svg>

        
  </button>

        <div id="artdeco-gen-42" class="ember-view"><div id="ember144" class="ember-view"></div></div>
      </span>
    </div>
  
                      </li>
                      <li class="search-reusables__primary-filter search-reusables__primary-filter--hidden">
                          
    <div class="search-reusables__filter-trigger-and-dropdown" data-basic-filter-parameter-name="experience">
        <div id="hoverable-outlet-experience-level-filter-value">  <div id="artdeco-hoverable-artdeco-gen-43" class="artdeco-hoverable-content reusable-search-filters-trigger-dropdown__content artdeco-hoverable-content--inverse-theme artdeco-hoverable-content--default-spacing artdeco-hoverable-content--undefined-placement" tabindex="-1" role="tooltip" aria-hidden="true">
    <div class="artdeco-hoverable-content__shell">
        <button class="artdeco-hoverable-content__close-btn" aria-label="Dismiss" type="button">
          <li-icon aria-hidden="true" type="cancel-icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
      <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
    </svg></li-icon>
        </button>
      <div class="artdeco-hoverable-content__content">
        
            <form>
              <fieldset class="reusable-search-filters-trigger-dropdown__container">
                <legend class="a11y-text">
                  Filter results by: Experience level
                </legend>
                  <div class="pl4 pr6">
                    <!---->
                    
    <ul class="list-style-none relative search-reusables__collection-values-container search-reusables__collection-values-container--50vh">
          <li class="search-reusables__collection-values-item">
            <input name="experience-level-filter-value" id="experience-1" class="search-reusables__select-input" type="checkbox" value="1">
            <label for="experience-1" class="search-reusables__value-label">
              <p class="display-flex">
                <span class="t-14 t-black--light t-normal" aria-hidden="true">
                  Internship
                </span>
                <span class="visually-hidden">
                    Filter by Internship
                </span>
<!---->              </p>
            </label>
<!---->          </li>
          <li class="search-reusables__collection-values-item">
            <input name="experience-level-filter-value" id="experience-2" class="search-reusables__select-input" type="checkbox" value="2">
            <label for="experience-2" class="search-reusables__value-label">
              <p class="display-flex">
                <span class="t-14 t-black--light t-normal" aria-hidden="true">
                  Entry level
                </span>
                <span class="visually-hidden">
                    Filter by Entry level
                </span>
<!---->              </p>
            </label>
<!---->          </li>
          <li class="search-reusables__collection-values-item">
            <input name="experience-level-filter-value" id="experience-3" class="search-reusables__select-input" type="checkbox" value="3">
            <label for="experience-3" class="search-reusables__value-label">
              <p class="display-flex">
                <span class="t-14 t-black--light t-normal" aria-hidden="true">
                  Associate
                </span>
                <span class="visually-hidden">
                    Filter by Associate
                </span>
<!---->              </p>
            </label>
<!---->          </li>
          <li class="search-reusables__collection-values-item">
            <input name="experience-level-filter-value" id="experience-4" class="search-reusables__select-input" type="checkbox" value="4">
            <label for="experience-4" class="search-reusables__value-label">
              <p class="display-flex">
                <span class="t-14 t-black--light t-normal" aria-hidden="true">
                  Mid-Senior level
                </span>
                <span class="visually-hidden">
                    Filter by Mid-Senior level
                </span>
<!---->              </p>
            </label>
<!---->          </li>
          <li class="search-reusables__collection-values-item">
            <input name="experience-level-filter-value" id="experience-5" class="search-reusables__select-input" type="checkbox" value="5">
            <label for="experience-5" class="search-reusables__value-label">
              <p class="display-flex">
                <span class="t-14 t-black--light t-normal" aria-hidden="true">
                  Director
                </span>
                <span class="visually-hidden">
                    Filter by Director
                </span>
<!---->              </p>
            </label>
<!---->          </li>
          <li class="search-reusables__collection-values-item">
            <input name="experience-level-filter-value" id="experience-6" class="search-reusables__select-input" type="checkbox" value="6">
            <label for="experience-6" class="search-reusables__value-label">
              <p class="display-flex">
                <span class="t-14 t-black--light t-normal" aria-hidden="true">
                  Executive
                </span>
                <span class="visually-hidden">
                    Filter by Executive
                </span>
<!---->              </p>
            </label>
<!---->          </li>
      
    </ul>
  
                    <!---->
                  </div>
                  <hr class="reusable-search-filters__divider m0 mt3">
                  
    <div class="reusable-search-filters-buttons display-flex justify-flex-end mt3 ph2">
          
  <button aria-label="Cancel Experience level filter" id="ember150" class="artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view" type="button"><!---->
<span class="artdeco-button__text">
    
    Cancel
  
</span></button>

          
  <button aria-label="Apply current filter to show results" id="ember151" class="artdeco-button artdeco-button--2 artdeco-button--primary ember-view ml2" type="button"><!---->
<span class="artdeco-button__text">
    
    
            Show results
          
  
</span></button>

    </div>
  
              </fieldset>
            </form>
        
      </div>
    </div>
    <div class="artdeco-hoverable-content__arrow" aria-hidden="true"></div>
  </div>
</div>
      <span tabindex="-1" id="ember147" class="artdeco-hoverable-trigger artdeco-hoverable-trigger--content-placed-bottom ember-view">
        
  <button class="artdeco-pill artdeco-pill--slate artdeco-pill--choice artdeco-pill--2 search-reusables__filter-pill-button
       reusable-search-filter-trigger-and-dropdown__trigger" id="searchFilter_experience" aria-controls="artdeco-hoverable-artdeco-gen-43" aria-expanded="false" aria-label="Experience level filter. Clicking this button displays all Experience level filter options." type="button">
    
<!---->            Experience level
<!---->          <svg role="none" aria-hidden="true" class="search-reusables__pill-button-caret-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="caret-small">
<!---->    
    <use href="#caret-small" width="16" height="16"></use>
</svg>

        
  </button>

        <div id="artdeco-gen-43" class="ember-view"><div id="ember149" class="ember-view"></div></div>
      </span>
    </div>
  
                      </li>
                      <li class="search-reusables__primary-filter">
                          
    <div class="search-reusables__filter-trigger-and-dropdown" data-basic-filter-parameter-name="company">
        <div id="hoverable-outlet-company-filter-value">  <div id="artdeco-hoverable-artdeco-gen-44" class="artdeco-hoverable-content reusable-search-filters-trigger-dropdown__content artdeco-hoverable-content--inverse-theme artdeco-hoverable-content--default-spacing artdeco-hoverable-content--undefined-placement" tabindex="-1" role="tooltip" aria-hidden="true">
    <div class="artdeco-hoverable-content__shell">
        <button class="artdeco-hoverable-content__close-btn" aria-label="Dismiss" type="button">
          <li-icon aria-hidden="true" type="cancel-icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
      <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
    </svg></li-icon>
        </button>
      <div class="artdeco-hoverable-content__content">
        
            <form>
              <fieldset class="reusable-search-filters-trigger-dropdown__container">
                <legend class="a11y-text">
                  Filter results by: Company
                </legend>
                  <div class="pl4 pr6">
                    
    <div class="search-reusables__filter-new-value-typeahead mt5">
      
    <div class="search-basic-typeahead search-vertical-typeahead">
<!---->        
        
    <input class="basic-input " placeholder="Add a company" dir="auto" role="combobox" aria-autocomplete="list" aria-label="Add a company" aria-activedescendant="" aria-expanded="false" type="text">
  
<!---->      
    </div>
  
    </div>
  
                    
    <ul class="list-style-none relative search-reusables__collection-values-container search-reusables__collection-values-container--50vh">
          <li class="search-reusables__collection-values-item">
            <input name="company-filter-value" id="company-41629" class="search-reusables__select-input" type="checkbox" value="41629">
            <label for="company-41629" class="search-reusables__value-label">
              <p class="display-flex">
                <span class="t-14 t-black--light t-normal" aria-hidden="true">
                  adesso SE
                </span>
                <span class="visually-hidden">
                    Filter by adesso SE
                </span>
<!---->              </p>
            </label>
<!---->          </li>
          <li class="search-reusables__collection-values-item">
            <input name="company-filter-value" id="company-234280" class="search-reusables__select-input" type="checkbox" value="234280">
            <label for="company-234280" class="search-reusables__value-label">
              <p class="display-flex">
                <span class="t-14 t-black--light t-normal" aria-hidden="true">
                  Canonical
                </span>
                <span class="visually-hidden">
                    Filter by Canonical
                </span>
<!---->              </p>
            </label>
<!---->          </li>
          <li class="search-reusables__collection-values-item">
            <input name="company-filter-value" id="company-80086688" class="search-reusables__select-input" type="checkbox" value="80086688">
            <label for="company-80086688" class="search-reusables__value-label">
              <p class="display-flex">
                <span class="t-14 t-black--light t-normal" aria-hidden="true">
                  Syntax Institut
                </span>
                <span class="visually-hidden">
                    Filter by Syntax Institut
                </span>
<!---->              </p>
            </label>
<!---->          </li>
          <li class="search-reusables__collection-values-item">
            <input name="company-filter-value" id="company-10348996" class="search-reusables__select-input" type="checkbox" value="10348996">
            <label for="company-10348996" class="search-reusables__value-label">
              <p class="display-flex">
                <span class="t-14 t-black--light t-normal" aria-hidden="true">
                  Instaffo
                </span>
                <span class="visually-hidden">
                    Filter by Instaffo
                </span>
<!---->              </p>
            </label>
<!---->          </li>
          <li class="search-reusables__collection-values-item">
            <input name="company-filter-value" id="company-1592017" class="search-reusables__select-input" type="checkbox" value="1592017">
            <label for="company-1592017" class="search-reusables__value-label">
              <p class="display-flex">
                <span class="t-14 t-black--light t-normal" aria-hidden="true">
                  Optimus Search
                </span>
                <span class="visually-hidden">
                    Filter by Optimus Search
                </span>
<!---->              </p>
            </label>
<!---->          </li>
          <li class="search-reusables__collection-values-item">
            <input name="company-filter-value" id="company-11010661" class="search-reusables__select-input" type="checkbox" value="11010661">
            <label for="company-11010661" class="search-reusables__value-label">
              <p class="display-flex">
                <span class="t-14 t-black--light t-normal" aria-hidden="true">
                  TieTalent
                </span>
                <span class="visually-hidden">
                    Filter by TieTalent
                </span>
<!---->              </p>
            </label>
<!---->          </li>
          <li class="search-reusables__collection-values-item">
            <input name="company-filter-value" id="company-1215136" class="search-reusables__select-input" type="checkbox" value="1215136">
            <label for="company-1215136" class="search-reusables__value-label">
              <p class="display-flex">
                <span class="t-14 t-black--light t-normal" aria-hidden="true">
                  CONTACT Software
                </span>
                <span class="visually-hidden">
                    Filter by CONTACT Software
                </span>
<!---->              </p>
            </label>
<!---->          </li>
          <li class="search-reusables__collection-values-item">
            <input name="company-filter-value" id="company-1038" class="search-reusables__select-input" type="checkbox" value="1038">
            <label for="company-1038" class="search-reusables__value-label">
              <p class="display-flex">
                <span class="t-14 t-black--light t-normal" aria-hidden="true">
                  Deloitte
                </span>
                <span class="visually-hidden">
                    Filter by Deloitte
                </span>
<!---->              </p>
            </label>
<!---->          </li>
          <li class="search-reusables__collection-values-item">
            <input name="company-filter-value" id="company-388882" class="search-reusables__select-input" type="checkbox" value="388882">
            <label for="company-388882" class="search-reusables__value-label">
              <p class="display-flex">
                <span class="t-14 t-black--light t-normal" aria-hidden="true">
                  Finanz Informatik
                </span>
                <span class="visually-hidden">
                    Filter by Finanz Informatik
                </span>
<!---->              </p>
            </label>
<!---->          </li>
          <li class="search-reusables__collection-values-item">
            <input name="company-filter-value" id="company-9223407" class="search-reusables__select-input" type="checkbox" value="9223407">
            <label for="company-9223407" class="search-reusables__value-label">
              <p class="display-flex">
                <span class="t-14 t-black--light t-normal" aria-hidden="true">
                  Staffbase
                </span>
                <span class="visually-hidden">
                    Filter by Staffbase
                </span>
<!---->              </p>
            </label>
<!---->          </li>
          <li class="search-reusables__collection-values-item">
            <input name="company-filter-value" id="company-10949547" class="search-reusables__select-input" type="checkbox" value="10949547">
            <label for="company-10949547" class="search-reusables__value-label">
              <p class="display-flex">
                <span class="t-14 t-black--light t-normal" aria-hidden="true">
                  Cognigy
                </span>
                <span class="visually-hidden">
                    Filter by Cognigy
                </span>
<!---->              </p>
            </label>
<!---->          </li>
      
    </ul>
  
                    <!---->
                  </div>
                  <hr class="reusable-search-filters__divider m0 mt3">
                  
    <div class="reusable-search-filters-buttons display-flex justify-flex-end mt3 ph2">
          
  <button aria-label="Cancel Company filter" id="ember156" class="artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view" type="button"><!---->
<span class="artdeco-button__text">
    
    Cancel
  
</span></button>

          
  <button aria-label="Apply current filter to show results" id="ember157" class="artdeco-button artdeco-button--2 artdeco-button--primary ember-view ml2" type="button"><!---->
<span class="artdeco-button__text">
    
    
            Show results
          
  
</span></button>

    </div>
  
              </fieldset>
            </form>
        
      </div>
    </div>
    <div class="artdeco-hoverable-content__arrow" aria-hidden="true"></div>
  </div>
</div>
      <span tabindex="-1" id="ember152" class="artdeco-hoverable-trigger artdeco-hoverable-trigger--content-placed-bottom ember-view">
        
  <button class="artdeco-pill artdeco-pill--slate artdeco-pill--choice artdeco-pill--2 search-reusables__filter-pill-button
       reusable-search-filter-trigger-and-dropdown__trigger" id="searchFilter_company" aria-controls="artdeco-hoverable-artdeco-gen-44" aria-expanded="false" aria-label="Company filter. Clicking this button displays all Company filter options." type="button">
    
<!---->            Company
<!---->          <svg role="none" aria-hidden="true" class="search-reusables__pill-button-caret-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="caret-small">
<!---->    
    <use href="#caret-small" width="16" height="16"></use>
</svg>

        
  </button>

        <div id="artdeco-gen-44" class="ember-view"><div id="ember154" class="ember-view"></div></div>
      </span>
    </div>
  
                      </li>
                      <li class="search-reusables__primary-filter search-reusables__primary-filter--hidden">
                          
    <div class="search-reusables__filter-trigger-and-dropdown" data-basic-filter-parameter-name="workplaceType">
        <div id="hoverable-outlet-remote-filter-value">  <div id="artdeco-hoverable-artdeco-gen-45" class="artdeco-hoverable-content reusable-search-filters-trigger-dropdown__content artdeco-hoverable-content--inverse-theme artdeco-hoverable-content--default-spacing artdeco-hoverable-content--undefined-placement" tabindex="-1" role="tooltip" aria-hidden="true">
    <div class="artdeco-hoverable-content__shell">
        <button class="artdeco-hoverable-content__close-btn" aria-label="Dismiss" type="button">
          <li-icon aria-hidden="true" type="cancel-icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
      <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
    </svg></li-icon>
        </button>
      <div class="artdeco-hoverable-content__content">
        
            <form>
              <fieldset class="reusable-search-filters-trigger-dropdown__container">
                <legend class="a11y-text">
                  Filter results by: Remote
                </legend>
                  <div class="pl4 pr6">
                    <!---->
                    
    <ul class="list-style-none relative search-reusables__collection-values-container search-reusables__collection-values-container--50vh">
          <li class="search-reusables__collection-values-item">
            <input name="remote-filter-value" id="workplaceType-2" class="search-reusables__select-input" type="checkbox" value="2">
            <label for="workplaceType-2" class="search-reusables__value-label">
              <p class="display-flex">
                <span class="t-14 t-black--light t-normal" aria-hidden="true">
                  Remote
                </span>
                <span class="visually-hidden">
                    Filter by Remote
                </span>
<!---->              </p>
            </label>
<!---->          </li>
          <li class="search-reusables__collection-values-item">
            <input name="remote-filter-value" id="workplaceType-1" class="search-reusables__select-input" type="checkbox" value="1">
            <label for="workplaceType-1" class="search-reusables__value-label">
              <p class="display-flex">
                <span class="t-14 t-black--light t-normal" aria-hidden="true">
                  On-site
                </span>
                <span class="visually-hidden">
                    Filter by On-site
                </span>
<!---->              </p>
            </label>
<!---->          </li>
          <li class="search-reusables__collection-values-item">
            <input name="remote-filter-value" id="workplaceType-3" class="search-reusables__select-input" type="checkbox" value="3">
            <label for="workplaceType-3" class="search-reusables__value-label">
              <p class="display-flex">
                <span class="t-14 t-black--light t-normal" aria-hidden="true">
                  Hybrid
                </span>
                <span class="visually-hidden">
                    Filter by Hybrid
                </span>
<!---->              </p>
            </label>
<!---->          </li>
      
    </ul>
  
                    <!---->
                  </div>
                  <hr class="reusable-search-filters__divider m0 mt3">
                  
    <div class="reusable-search-filters-buttons display-flex justify-flex-end mt3 ph2">
          
  <button aria-label="Cancel Remote filter" id="ember161" class="artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view" type="button"><!---->
<span class="artdeco-button__text">
    
    Cancel
  
</span></button>

          
  <button aria-label="Apply current filter to show results" id="ember162" class="artdeco-button artdeco-button--2 artdeco-button--primary ember-view ml2" type="button"><!---->
<span class="artdeco-button__text">
    
    
            Show results
          
  
</span></button>

    </div>
  
              </fieldset>
            </form>
        
      </div>
    </div>
    <div class="artdeco-hoverable-content__arrow" aria-hidden="true"></div>
  </div>
</div>
      <span tabindex="-1" id="ember158" class="artdeco-hoverable-trigger artdeco-hoverable-trigger--content-placed-bottom ember-view">
        
  <button class="artdeco-pill artdeco-pill--slate artdeco-pill--choice artdeco-pill--2 search-reusables__filter-pill-button
       reusable-search-filter-trigger-and-dropdown__trigger" id="searchFilter_workplaceType" aria-controls="artdeco-hoverable-artdeco-gen-45" aria-expanded="false" aria-label="Remote filter. Clicking this button displays all Remote filter options." type="button">
    
<!---->            Remote
<!---->          <svg role="none" aria-hidden="true" class="search-reusables__pill-button-caret-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="caret-small">
<!---->    
    <use href="#caret-small" width="16" height="16"></use>
</svg>

        
  </button>

        <div id="artdeco-gen-45" class="ember-view"><div id="ember160" class="ember-view"></div></div>
      </span>
    </div>
  
                      </li>
                    <li class="search-reusables__primary-filter search-reusables__primary-filter--hidden">
                      
    <div class="search-reusables__filter-binary-toggle">
      <button aria-checked="false" role="radio" aria-label="Easy Apply filter." id="searchFilter_applyWithLinkedin" class="artdeco-pill artdeco-pill--slate artdeco-pill--2 artdeco-pill--choice ember-view search-reusables__filter-pill-button" type="button">  
<!---->        Easy Apply
      
</button>
    </div>
  
                    </li>

<!---->          </ul>

          <div class="display-flex align-items-center">
              <span class="search-reusables__filter-vertical-divider"></span>
              
  
    <div class="relative mr2">
      
  <button class="artdeco-pill artdeco-pill--slate artdeco-pill--choice artdeco-pill--2 search-reusables__filter-pill-button
       search-reusables__filter-pill-button search-reusables__all-filters-pill-button" aria-label="Show all filters. Clicking this button displays all available filter options." id="ember138" type="button">
    
        All filters
      
  </button>


      <div id="ember164" class="ember-view"><!----></div>
    </div>
  


<!---->          </div>

    </div>
  
              
    <button id="ember165" class="artdeco-button artdeco-button--muted artdeco-button--icon-right artdeco-button--1 artdeco-button--tertiary ember-view jobs-search-search-mode">        <svg role="none" aria-hidden="true" class="artdeco-button__icon " xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="arrow-right-small" data-rtl="true">
<!---->    
    <use href="#arrow-right-small" width="16" height="16"></use>
</svg>


<span class="artdeco-button__text">
    Try the new job search
</span></button>
  
                </div>
    </div>
  </section>

  
  
    
  </div>
</section>

  <div class="scaffold-layout__inner scaffold-layout-container
      scaffold-layout-container--reflow
      ">
<!---->
      <div class="scaffold-layout__row scaffold-layout__content
          scaffold-layout__content--list-detail
          
          
          
          
          ">
<!---->
          <main id="main" class="RgofbPJoMVmCagjkIKcvuMDIPwhUnJrmpGPWA
    scaffold-layout__list-detail
    ">
    <div class="scaffold-layout__list-detail-container">
      <div>
        
              
            
      </div>
      <div class="scaffold-layout__list-detail-inner scaffold-layout__list-detail-inner--grow">
        <div class="scaffold-layout__list " tabindex="-1">
          
              
    
      <header class="scaffold-layout__list-header jobs-search-results-list__header--blue
          
          jobs-search-results-list__header ph1
          " tabindex="-1">
  
        <div class="jobs-search-results-list__title-heading
            truncate
            jobs-search-results-list__text">
          <span id="results-list__title" class="t-16" title="react in Germany" dir="ltr">
              <!---->react in Germany<!---->
          </span>

          <div class="display-flex flex-column t-12 t-black--light t-normal">
              <small class="display-flex t-normal
                  t-12 t-black--light
                  
                  jobs-search-results-list__text">
                <div class="jobs-search-results-list__subtitle
                    ">
                    <span dir="ltr">
                      <!---->4,382 results<!---->
                    </span>
<!----><!---->                </div>
              </small>
            <!----><!---->          </div>
        </div>
<!---->        
      
  
          
    
            
    <div class="jobs-search-create-alert__wrapper">
      <div>
        <div id="ember260" class="jobs-search-create-alert__artdeco-toggle jobs-search-create-alert__artdeco-toggle-text artdeco-toggle artdeco-toggle--24dp artdeco-toggle--default ember-view"><span aria-hidden="true" class="artdeco-toggle__text" data-artdeco-toggle-text="true">
    Set alert
</span>
<label for="adToggle_ember260" data-artdeco-toggle-label="true" class="artdeco-toggle__label default">
    <span class="label  a11y-text " data-artdeco-toggle-label-hidden="true">
      Set job alert for React in Germany
    </span>
</label>

<input role="switch" aria-checked="false" class="input artdeco-toggle__button artdeco-toggle__button--24dp" data-artdeco-toggle-button="true" id="adToggle_ember260" type="checkbox">
</div>
      </div>
    </div>

<!---->  
          
    <span></span>
  
      

      <!---->
      <!---->
    
      
</header>

      <div class="MVUUfRgZQVmXzBNJcTSaaqbqaUNiOmqojOQ
          
          ">
        
      <!---->
      
  
            <button id="ember70" class="artdeco-button artdeco-button--1 artdeco-button--fluid artdeco-button--tertiary ember-view scaffold-layout__list-jump-button" type="button"><!---->
<span class="artdeco-button__text">
    Jump to active job details
</span></button>

            <button id="ember71" class="artdeco-button artdeco-button--1 artdeco-button--fluid artdeco-button--tertiary ember-view scaffold-layout__list-jump-button" type="button"><!---->
<span class="artdeco-button__text">
    Jump to active search result
</span></button>

<!---->      

      <!---->
    
<!---->        <div data-results-list-top-scroll-sentinel=""></div>
          <ul class="xQOyOLVaeJJDEbFUWySCWStHUZgmXBtTjk">
  
              
        <li id="ember166" class="ember-view   SmCOUmLhQcYHCWzDxjUbFhltcDyHyxQmb occludable-update p0 relative scaffold-layout__list-item" data-occludable-job-id="4268410660">
            
                  
    <div>
      
    <div data-job-id="4268410660" class="display-flex job-card-container relative job-card-list
        job-card-container--clickable
        
        job-card-list--underline-title-on-hover  jobs-search-two-pane__job-card-container--viewport-tracking-0">

      <div>
        <div id="ember167" class="job-card-list__entity-lockup  artdeco-entity-lockup artdeco-entity-lockup--size-4 ember-view">
            <div id="ember168" class="job-card-list__logo  artdeco-entity-lockup__image artdeco-entity-lockup__image--type-square ember-view" type="square">
              
    <div class="ivm-image-view-model    job-card-list__logo-ivm">
        
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
<!---->          <img width="56" src="https://media.licdn.com/dms/image/v2/D4D0BAQEyhTEMd_GcqQ/company-logo_100_100/company-logo_100_100/0/1738852138324/edaggroup_logo?e=1755734400&amp;v=beta&amp;t=XFoVfUBXl4b376lqUyjsQhPutcTAJcliX5xSSx8Z38s" loading="lazy" height="56" alt="EDAG Group logo" id="ember169" class="ivm-view-attr__img--centered EntityPhoto-square-4   evi-image lazy-image ember-view">
    </div>
  
          </div>
  
            
</div>

          <div id="ember170" class="flex-grow-1 artdeco-entity-lockup__content ember-view">
            <div id="ember171" class="full-width artdeco-entity-lockup__title ember-view">
                  <a data-control-id="JOnNg7bvwLhUKjCLZiFb7Q==" tabindex="0" href="/jobs/view/4268410660/?eBP=NOT_ELIGIBLE_FOR_CHARGING&amp;refId=KK%2FllKMtw6jdCCmfh0zrAA%3D%3D&amp;trackingId=JOnNg7bvwLhUKjCLZiFb7Q%3D%3D&amp;trk=flagship3_search_srp_jobs" id="ember172" class="disabled ember-view job-card-container__link
                      lAzJmcvyxtGwGiGJaMwYnNFRGLxxWljHaDE
                      job-card-list__title--link" aria-label="Frontend Developer* VAPS with verification" dir="ltr">
                      <span aria-hidden="true"><strong><!---->Frontend Developer* VAPS<!----></strong><span class="white-space-pre"> </span><!----><!----><span class="tvm__text tvm__text--low-emphasis"><svg role="none" aria-hidden="true" class="text-view-model__verified-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="verified-small">
<!---->    
    <use href="#verified-small" width="16" height="16"></use>
</svg>
</span></span><span class="visually-hidden"><!---->Frontend Developer* VAPS with verification<!----></span>
                  </a>
            
</div>
            <div id="ember173" class="artdeco-entity-lockup__subtitle ember-view">
                <span class="DtHZyGNaOYStBKDLZjBlOncsboFqyDqDxY " dir="ltr">
                  <!---->EDAG Group<!---->
                </span>

            </div>

            <div id="ember174" class="artdeco-entity-lockup__caption ember-view">
                  <ul class="job-card-container__metadata-wrapper">
                      <li class="dnuFBnNWghFtUEmTHUHXEieLJqAiGtKMwuANkw ">
                        <span dir="ltr">
                          <!---->Ingolstadt, Bavaria, Germany (Hybrid)<!---->
                        </span>
                      </li>
<!---->                  </ul>
            </div>

<!---->
<!---->          </div>

        
</div>

            
<!---->      
            <ul class="job-card-list__footer-wrapper job-card-container__footer-wrapper flex-shrink-zero display-flex t-sans t-12 t-black--light t-normal t-roman mt1">
<!---->                          <li class="job-card-container__footer-item
                              ">
                            <time datetime="2025-07-17">
                              2 days ago
<!---->                            </time>
                          </li>
            </ul>
          <span class="visually-hidden" aria-live="polite">
<!---->          </span>
      </div>
      <div class="job-card-list__actions-container">
          
        
      <div>
          <button aria-label="Dismiss Frontend Developer* VAPS job" id="ember175" class="job-card-container__action job-card-container__action-small artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view" type="button"><!---->
<span class="artdeco-button__text">
    
            <svg role="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="close-small">
<!---->    
    <use href="#close-small" width="16" height="16"></use>
</svg>

            <span class="job-card-container__action-text"></span>
          
</span></button>
      </div>
  
      <!---->  
      </div>
    </div>
  
    </div>
  
                              
        </li>
  
              
        <li id="ember176" class="ember-view   SmCOUmLhQcYHCWzDxjUbFhltcDyHyxQmb occludable-update p0 relative scaffold-layout__list-item" data-occludable-job-id="4266250391">
            
                  
    <div>
      
    <div data-job-id="4266250391" class="display-flex job-card-container relative job-card-list
        job-card-container--clickable
        
        job-card-list--underline-title-on-hover  jobs-search-two-pane__job-card-container--viewport-tracking-1">

      <div>
        <div id="ember177" class="job-card-list__entity-lockup  artdeco-entity-lockup artdeco-entity-lockup--size-4 ember-view">
            <div id="ember178" class="job-card-list__logo  artdeco-entity-lockup__image artdeco-entity-lockup__image--type-square ember-view" type="square">
              
    <div class="ivm-image-view-model    job-card-list__logo-ivm">
        
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
<!---->          <img width="56" src="https://media.licdn.com/dms/image/v2/C4D0BAQGc7zL-mEBdKA/company-logo_100_100/company-logo_100_100/0/1630546830118/people_more_logo?e=1755734400&amp;v=beta&amp;t=nlN_ED3FPHmKRENd8kqVPXYWxV-zsceBTzf8f7__kUc" loading="lazy" height="56" alt="People More logo" id="ember179" class="ivm-view-attr__img--centered EntityPhoto-square-4   evi-image lazy-image ember-view">
    </div>
  
          </div>
  
            
</div>

          <div id="ember180" class="flex-grow-1 artdeco-entity-lockup__content ember-view">
            <div id="ember181" class="full-width artdeco-entity-lockup__title ember-view">
                  <a data-control-id="+tR+eC7oVdBZfKjVr9+UTQ==" tabindex="0" href="/jobs/view/4266250391/?eBP=NOT_ELIGIBLE_FOR_CHARGING&amp;refId=KK%2FllKMtw6jdCCmfh0zrAA%3D%3D&amp;trackingId=%2BtR%2BeC7oVdBZfKjVr9%2BUTQ%3D%3D&amp;trk=flagship3_search_srp_jobs" id="ember182" class="disabled ember-view job-card-container__link
                      lAzJmcvyxtGwGiGJaMwYnNFRGLxxWljHaDE
                      job-card-list__title--link" aria-label="Frontend Engineer  Real-Time Robotic Interfaces" dir="ltr">
                      <span aria-hidden="true"><strong><!---->Frontend Engineer  Real-Time Robotic Interfaces<!----></strong></span><span class="visually-hidden"><!---->Frontend Engineer  Real-Time Robotic Interfaces<!----></span>
                  </a>
            
</div>
            <div id="ember183" class="artdeco-entity-lockup__subtitle ember-view">
                <span class="DtHZyGNaOYStBKDLZjBlOncsboFqyDqDxY " dir="ltr">
                  <!---->People More<!---->
                </span>

            </div>

            <div id="ember184" class="artdeco-entity-lockup__caption ember-view">
                  <ul class="job-card-container__metadata-wrapper">
                      <li class="dnuFBnNWghFtUEmTHUHXEieLJqAiGtKMwuANkw ">
                        <span dir="ltr">
                          <!---->Gilching, Bavaria, Germany (On-site)<!---->
                        </span>
                      </li>
<!---->                  </ul>
            </div>

<!---->
<!---->          </div>

        
</div>

            
<!---->      
            <ul class="job-card-list__footer-wrapper job-card-container__footer-wrapper flex-shrink-zero display-flex t-sans t-12 t-black--light t-normal t-roman mt1">
<!---->                          <li class="job-card-container__footer-item
                              ">
                            <time datetime="2025-07-14">
                              5 days ago
<!---->                            </time>
                          </li>
            </ul>
          <span class="visually-hidden" aria-live="polite">
<!---->          </span>
      </div>
      <div class="job-card-list__actions-container">
          
        
      <div>
          <button aria-label="Dismiss Frontend Engineer  Real-Time Robotic Interfaces job" id="ember185" class="job-card-container__action job-card-container__action-small artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view" type="button"><!---->
<span class="artdeco-button__text">
    
            <svg role="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="close-small">
<!---->    
    <use href="#close-small" width="16" height="16"></use>
</svg>

            <span class="job-card-container__action-text"></span>
          
</span></button>
      </div>
  
      <!---->  
      </div>
    </div>
  
    </div>
  
                              
        </li>
  
              
        <li id="ember186" class="ember-view   SmCOUmLhQcYHCWzDxjUbFhltcDyHyxQmb occludable-update p0 relative scaffold-layout__list-item" data-occludable-job-id="4264773176">
            
                  
    <div>
      
    <div data-job-id="4264773176" class="display-flex job-card-container relative job-card-list
        job-card-container--clickable
        
        job-card-list--underline-title-on-hover  jobs-search-two-pane__job-card-container--viewport-tracking-2">

      <div>
        <div id="ember187" class="job-card-list__entity-lockup  artdeco-entity-lockup artdeco-entity-lockup--size-4 ember-view">
            <div id="ember188" class="job-card-list__logo  artdeco-entity-lockup__image artdeco-entity-lockup__image--type-square ember-view" type="square">
              
    <div class="ivm-image-view-model    job-card-list__logo-ivm">
        
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
<!---->          <img width="56" src="https://media.licdn.com/dms/image/v2/D4E0BAQFqdm1TZ-RZKQ/company-logo_100_100/B4EZgOay6gHEAY-/0/1752588562343/amazon_web_services_logo?e=1755734400&amp;v=beta&amp;t=vdFCG9B8ZHN5dbfpc5uW9aczDBPUz72ZR7S_7JQTvOQ" loading="lazy" height="56" alt="Amazon Web Services (AWS) logo" id="ember189" class="ivm-view-attr__img--centered EntityPhoto-square-4   evi-image lazy-image ember-view">
    </div>
  
          </div>
  
            
</div>

          <div id="ember190" class="flex-grow-1 artdeco-entity-lockup__content ember-view">
            <div id="ember191" class="full-width artdeco-entity-lockup__title ember-view">
                  <a data-control-id="xANLFoYIcbi+jN0nl20HNA==" tabindex="0" href="/jobs/view/4264773176/?eBP=NOT_ELIGIBLE_FOR_CHARGING&amp;refId=KK%2FllKMtw6jdCCmfh0zrAA%3D%3D&amp;trackingId=xANLFoYIcbi%2BjN0nl20HNA%3D%3D&amp;trk=flagship3_search_srp_jobs" id="ember192" class="disabled ember-view job-card-container__link
                      lAzJmcvyxtGwGiGJaMwYnNFRGLxxWljHaDE
                      job-card-list__title--link" aria-label="2025 Graduate Front End Engineer with verification" dir="ltr">
                      <span aria-hidden="true"><strong><!---->2025 Graduate Front End Engineer<!----></strong><span class="white-space-pre"> </span><!----><!----><span class="tvm__text tvm__text--low-emphasis"><svg role="none" aria-hidden="true" class="text-view-model__verified-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="verified-small">
<!---->    
    <use href="#verified-small" width="16" height="16"></use>
</svg>
</span></span><span class="visually-hidden"><!---->2025 Graduate Front End Engineer with verification<!----></span>
                  </a>
            
</div>
            <div id="ember193" class="artdeco-entity-lockup__subtitle ember-view">
                <span class="DtHZyGNaOYStBKDLZjBlOncsboFqyDqDxY " dir="ltr">
                  <!---->Amazon Web Services (AWS)<!---->
                </span>

            </div>

            <div id="ember194" class="artdeco-entity-lockup__caption ember-view">
                  <ul class="job-card-container__metadata-wrapper">
                      <li class="dnuFBnNWghFtUEmTHUHXEieLJqAiGtKMwuANkw ">
                        <span dir="ltr">
                          <!---->Aachen, North Rhine-Westphalia, Germany<!---->
                        </span>
                      </li>
<!---->                  </ul>
            </div>

<!---->
<!---->          </div>

        
</div>

            
<!---->      
            <ul class="job-card-list__footer-wrapper job-card-container__footer-wrapper flex-shrink-zero display-flex t-sans t-12 t-black--light t-normal t-roman mt1">
<!---->                          <li class="job-card-container__footer-item
                              ">
                            <time datetime="2025-07-09">
                              1 week ago
<!---->                            </time>
                          </li>
            </ul>
          <span class="visually-hidden" aria-live="polite">
<!---->          </span>
      </div>
      <div class="job-card-list__actions-container">
          
        
      <div>
          <button aria-label="Dismiss 2025 Graduate Front End Engineer job" id="ember195" class="job-card-container__action job-card-container__action-small artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view" type="button"><!---->
<span class="artdeco-button__text">
    
            <svg role="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="close-small">
<!---->    
    <use href="#close-small" width="16" height="16"></use>
</svg>

            <span class="job-card-container__action-text"></span>
          
</span></button>
      </div>
  
      <!---->  
      </div>
    </div>
  
    </div>
  
                              
        </li>
  
              
        <li id="ember196" class="ember-view   SmCOUmLhQcYHCWzDxjUbFhltcDyHyxQmb occludable-update p0 relative scaffold-layout__list-item" data-occludable-job-id="4268040411">
            
                  
    <div>
      
    <div data-job-id="4268040411" class="display-flex job-card-container relative job-card-list
        job-card-container--clickable
        
        job-card-list--underline-title-on-hover  jobs-search-two-pane__job-card-container--viewport-tracking-3">

      <div>
        <div id="ember197" class="job-card-list__entity-lockup  artdeco-entity-lockup artdeco-entity-lockup--size-4 ember-view">
            <div id="ember198" class="job-card-list__logo  artdeco-entity-lockup__image artdeco-entity-lockup__image--type-square ember-view" type="square">
              
    <div class="ivm-image-view-model    job-card-list__logo-ivm">
        
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
<!---->          <img width="56" src="https://media.licdn.com/dms/image/v2/C4E0BAQEDBC1LZgTyAw/company-logo_100_100/company-logo_100_100/0/1674724902187/atharicommerce_logo?e=1755734400&amp;v=beta&amp;t=ZU36RettL4L7aygp2Axuj5d5jVn0vu00EHbeb9t-k-w" loading="lazy" height="56" alt="AthariCommerce logo" id="ember199" class="ivm-view-attr__img--centered EntityPhoto-square-4   evi-image lazy-image ember-view">
    </div>
  
          </div>
  
            
</div>

          <div id="ember200" class="flex-grow-1 artdeco-entity-lockup__content ember-view">
            <div id="ember201" class="full-width artdeco-entity-lockup__title ember-view">
                  <a data-control-id="DqSRQoMSi7hh/na7QpfTLw==" tabindex="0" href="/jobs/view/4268040411/?eBP=NOT_ELIGIBLE_FOR_CHARGING&amp;refId=KK%2FllKMtw6jdCCmfh0zrAA%3D%3D&amp;trackingId=DqSRQoMSi7hh%2Fna7QpfTLw%3D%3D&amp;trk=flagship3_search_srp_jobs" id="ember202" class="disabled ember-view job-card-container__link
                      lAzJmcvyxtGwGiGJaMwYnNFRGLxxWljHaDE
                      job-card-list__title--link" aria-label="Junior Frontend Developer für Shopify (m/w/d), Vollzeit" dir="ltr">
                      <span aria-hidden="true"><strong><!---->Junior Frontend Developer für Shopify (m/w/d), Vollzeit<!----></strong></span><span class="visually-hidden"><!---->Junior Frontend Developer für Shopify (m/w/d), Vollzeit<!----></span>
                  </a>
            
</div>
            <div id="ember203" class="artdeco-entity-lockup__subtitle ember-view">
                <span class="DtHZyGNaOYStBKDLZjBlOncsboFqyDqDxY " dir="ltr">
                  <!---->AthariCommerce<!---->
                </span>

            </div>

            <div id="ember204" class="artdeco-entity-lockup__caption ember-view">
                  <ul class="job-card-container__metadata-wrapper">
                      <li class="dnuFBnNWghFtUEmTHUHXEieLJqAiGtKMwuANkw ">
                        <span dir="ltr">
                          <!---->Cologne, North Rhine-Westphalia, Germany (On-site)<!---->
                        </span>
                      </li>
<!---->                  </ul>
            </div>

                <div id="ember205" class="mt1 t-sans t-12 t-black--light t-normal t-roman artdeco-entity-lockup__metadata ember-view">
                  <ul class="job-card-container__metadata-wrapper">
                    <li class="dnuFBnNWghFtUEmTHUHXEieLJqAiGtKMwuANkw">
                      <span dir="ltr">
                        <!---->€36K/yr - €42K/yr<!---->
                      </span>
                    </li>
                  </ul>
                </div>

<!---->          </div>

        
</div>

            
<!---->      
            <ul class="job-card-list__footer-wrapper job-card-container__footer-wrapper flex-shrink-zero display-flex t-sans t-12 t-black--light t-normal t-roman mt1">
<!---->                          <li class="job-card-container__footer-item
                              job-card-container__footer-item--highlighted t-bold">
                            <time datetime="2025-07-20">
                              1 hour ago
                                <span class="visually-hidden">Within the past 24 hours</span>
                            </time>
                          </li>
            </ul>
          <span class="visually-hidden" aria-live="polite">
<!---->          </span>
      </div>
      <div class="job-card-list__actions-container">
          
        
      <div>
          <button aria-label="Dismiss Junior Frontend Developer für Shopify (m/w/d), Vollzeit job" id="ember206" class="job-card-container__action job-card-container__action-small artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view" type="button"><!---->
<span class="artdeco-button__text">
    
            <svg role="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="close-small">
<!---->    
    <use href="#close-small" width="16" height="16"></use>
</svg>

            <span class="job-card-container__action-text"></span>
          
</span></button>
      </div>
  
      <!---->  
      </div>
    </div>
  
    </div>
  
                              
        </li>
  
              
        <li id="ember207" class="ember-view   SmCOUmLhQcYHCWzDxjUbFhltcDyHyxQmb occludable-update p0 relative scaffold-layout__list-item" data-occludable-job-id="4269957239">
            
                  
    <div>
      
    <div data-job-id="4269957239" class="display-flex job-card-container relative job-card-list
        job-card-container--clickable
        
        job-card-list--underline-title-on-hover  jobs-search-two-pane__job-card-container--viewport-tracking-4">

      <div>
        <div id="ember208" class="job-card-list__entity-lockup  artdeco-entity-lockup artdeco-entity-lockup--size-4 ember-view">
            <div id="ember209" class="job-card-list__logo  artdeco-entity-lockup__image artdeco-entity-lockup__image--type-square ember-view" type="square">
              
    <div class="ivm-image-view-model    job-card-list__logo-ivm">
        
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
<!---->          <img width="56" src="https://media.licdn.com/dms/image/v2/C4E0BAQFgJYCxGAi9WA/company-logo_100_100/company-logo_100_100/0/1631319496342?e=1755734400&amp;v=beta&amp;t=P1yW_Kqt3uEvy5NpG8E9uFlctOVSkzb8coT8i5zbU-o" loading="lazy" height="56" alt="Conscious Style Guide logo" id="ember210" class="ivm-view-attr__img--centered EntityPhoto-square-4   evi-image lazy-image ember-view">
    </div>
  
          </div>
  
            
</div>

          <div id="ember211" class="flex-grow-1 artdeco-entity-lockup__content ember-view">
            <div id="ember212" class="full-width artdeco-entity-lockup__title ember-view">
                  <a data-control-id="Irx0i8rPzB1bF0Yy9gvC9w==" tabindex="0" href="/jobs/view/4269957239/?eBP=NOT_ELIGIBLE_FOR_CHARGING&amp;refId=KK%2FllKMtw6jdCCmfh0zrAA%3D%3D&amp;trackingId=Irx0i8rPzB1bF0Yy9gvC9w%3D%3D&amp;trk=flagship3_search_srp_jobs" id="ember213" class="disabled ember-view job-card-container__link
                      lAzJmcvyxtGwGiGJaMwYnNFRGLxxWljHaDE
                      job-card-list__title--link" aria-label="Web Developer" dir="ltr">
                      <span aria-hidden="true"><strong><!---->Web Developer<!----></strong></span><span class="visually-hidden"><!---->Web Developer<!----></span>
                  </a>
            
</div>
            <div id="ember214" class="artdeco-entity-lockup__subtitle ember-view">
                <span class="DtHZyGNaOYStBKDLZjBlOncsboFqyDqDxY " dir="ltr">
                  <!---->Conscious Style Guide<!---->
                </span>

            </div>

            <div id="ember215" class="artdeco-entity-lockup__caption ember-view">
                  <ul class="job-card-container__metadata-wrapper">
                      <li class="dnuFBnNWghFtUEmTHUHXEieLJqAiGtKMwuANkw ">
                        <span dir="ltr">
                          <!---->Bochum, North Rhine-Westphalia, Germany (Hybrid)<!---->
                        </span>
                      </li>
<!---->                  </ul>
            </div>

<!---->
<!---->          </div>

        
</div>

            
<!---->      
            <ul class="job-card-list__footer-wrapper job-card-container__footer-wrapper flex-shrink-zero display-flex t-sans t-12 t-black--light t-normal t-roman mt1">
<!---->                          <li class="job-card-container__footer-item
                              job-card-container__footer-item--highlighted t-bold">
                            <time datetime="2025-07-20">
                              9 hours ago
                                <span class="visually-hidden">Within the past 24 hours</span>
                            </time>
                          </li>
            </ul>
          <span class="visually-hidden" aria-live="polite">
<!---->          </span>
      </div>
      <div class="job-card-list__actions-container">
          
        
      <div>
          <button aria-label="Dismiss Web Developer job" id="ember216" class="job-card-container__action job-card-container__action-small artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view" type="button"><!---->
<span class="artdeco-button__text">
    
            <svg role="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="close-small">
<!---->    
    <use href="#close-small" width="16" height="16"></use>
</svg>

            <span class="job-card-container__action-text"></span>
          
</span></button>
      </div>
  
      <!---->  
      </div>
    </div>
  
    </div>
  
                              
        </li>
  
              
        <li id="ember217" class="ember-view   SmCOUmLhQcYHCWzDxjUbFhltcDyHyxQmb occludable-update p0 relative scaffold-layout__list-item" data-occludable-job-id="4263870479">
            
                  
    <div>
      
    <div data-job-id="4263870479" class="display-flex job-card-container relative job-card-list
        job-card-container--clickable
        
        job-card-list--underline-title-on-hover  jobs-search-two-pane__job-card-container--viewport-tracking-5">

      <div>
        <div id="ember218" class="job-card-list__entity-lockup  artdeco-entity-lockup artdeco-entity-lockup--size-4 ember-view">
            <div id="ember219" class="job-card-list__logo  artdeco-entity-lockup__image artdeco-entity-lockup__image--type-square ember-view" type="square">
              
    <div class="ivm-image-view-model    job-card-list__logo-ivm">
        
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
<!---->          <img width="56" src="https://media.licdn.com/dms/image/v2/C4E0BAQEDnKdP9pitTg/company-logo_100_100/company-logo_100_100/0/1673305307805/cinify_io_logo?e=1755734400&amp;v=beta&amp;t=1-Q9gOA6FJ741BFp_J_csdDUy2FzpOx-T-EeJmb8MVQ" loading="lazy" height="56" alt="cinify logo" id="ember220" class="ivm-view-attr__img--centered EntityPhoto-square-4   evi-image lazy-image ember-view">
    </div>
  
          </div>
  
            
</div>

          <div id="ember221" class="flex-grow-1 artdeco-entity-lockup__content ember-view">
            <div id="ember222" class="full-width artdeco-entity-lockup__title ember-view">
                  <a data-control-id="Xj0v71kb1hdIoWfJLupsbw==" tabindex="0" href="/jobs/view/4263870479/?eBP=NOT_ELIGIBLE_FOR_CHARGING&amp;refId=KK%2FllKMtw6jdCCmfh0zrAA%3D%3D&amp;trackingId=Xj0v71kb1hdIoWfJLupsbw%3D%3D&amp;trk=flagship3_search_srp_jobs" id="ember223" class="disabled ember-view job-card-container__link
                      lAzJmcvyxtGwGiGJaMwYnNFRGLxxWljHaDE
                      job-card-list__title--link" aria-label="Frontend Developer (m/w/d) - in SaaS Startup (Remote / Hybrid)" dir="ltr">
                      <span aria-hidden="true"><strong><!---->Frontend Developer (m/w/d) - in SaaS Startup (Remote / Hybrid)<!----></strong></span><span class="visually-hidden"><!---->Frontend Developer (m/w/d) - in SaaS Startup (Remote / Hybrid)<!----></span>
                  </a>
            
</div>
            <div id="ember224" class="artdeco-entity-lockup__subtitle ember-view">
                <span class="DtHZyGNaOYStBKDLZjBlOncsboFqyDqDxY " dir="ltr">
                  <!---->cinify<!---->
                </span>

            </div>

            <div id="ember225" class="artdeco-entity-lockup__caption ember-view">
                  <ul class="job-card-container__metadata-wrapper">
                      <li class="dnuFBnNWghFtUEmTHUHXEieLJqAiGtKMwuANkw ">
                        <span dir="ltr">
                          <!---->Germany (Remote)<!---->
                        </span>
                      </li>
<!---->                  </ul>
            </div>

                <div id="ember226" class="mt1 t-sans t-12 t-black--light t-normal t-roman artdeco-entity-lockup__metadata ember-view">
                  <ul class="job-card-container__metadata-wrapper">
                    <li class="dnuFBnNWghFtUEmTHUHXEieLJqAiGtKMwuANkw">
                      <span dir="ltr">
                        <!---->€40K/yr - €65K/yr<!---->
                      </span>
                    </li>
                  </ul>
                </div>

<!---->          </div>

        
</div>

            
<!---->      
            <ul class="job-card-list__footer-wrapper job-card-container__footer-wrapper flex-shrink-zero display-flex t-sans t-12 t-black--light t-normal t-roman mt1">
<!---->                          <li class="job-card-container__footer-item
                              ">
                            <time datetime="2025-07-13">
                              1 week ago
<!---->                            </time>
                          </li>
            </ul>
          <span class="visually-hidden" aria-live="polite">
<!---->          </span>
      </div>
      <div class="job-card-list__actions-container">
          
        
      <div>
          <button aria-label="Dismiss Frontend Developer (m/w/d) - in SaaS Startup (Remote / Hybrid) job" id="ember227" class="job-card-container__action job-card-container__action-small artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view" type="button"><!---->
<span class="artdeco-button__text">
    
            <svg role="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="close-small">
<!---->    
    <use href="#close-small" width="16" height="16"></use>
</svg>

            <span class="job-card-container__action-text"></span>
          
</span></button>
      </div>
  
      <!---->  
      </div>
    </div>
  
    </div>
  
                              
        </li>
  
              
        <li id="ember228" class="ember-view   SmCOUmLhQcYHCWzDxjUbFhltcDyHyxQmb occludable-update p0 relative scaffold-layout__list-item" data-occludable-job-id="4268241403">
            
                  
    <div>
      
    <div data-job-id="4268241403" class="display-flex job-card-container relative job-card-list
        job-card-container--clickable
        
        job-card-list--underline-title-on-hover  jobs-search-two-pane__job-card-container--viewport-tracking-6">

      <div>
        <div id="ember229" class="job-card-list__entity-lockup  artdeco-entity-lockup artdeco-entity-lockup--size-4 ember-view">
            <div id="ember230" class="job-card-list__logo  artdeco-entity-lockup__image artdeco-entity-lockup__image--type-square ember-view" type="square">
              
    <div class="ivm-image-view-model    job-card-list__logo-ivm">
        
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
<!---->          <img width="56" src="https://media.licdn.com/dms/image/v2/D4E0BAQGm_ED9E3PKcQ/company-logo_100_100/company-logo_100_100/0/1680262694063?e=1755734400&amp;v=beta&amp;t=-Yhwl462Q19SWR10tw5xOV7_RViVSSRNhFvIZJdPhvY" loading="lazy" height="56" alt="Solakon GmbH logo" id="ember231" class="ivm-view-attr__img--centered EntityPhoto-square-4   evi-image lazy-image ember-view">
    </div>
  
          </div>
  
            
</div>

          <div id="ember232" class="flex-grow-1 artdeco-entity-lockup__content ember-view">
            <div id="ember233" class="full-width artdeco-entity-lockup__title ember-view">
                  <a data-control-id="qMTBc4VCrzH5ZygoWnQiXA==" tabindex="0" href="/jobs/view/4268241403/?eBP=NOT_ELIGIBLE_FOR_CHARGING&amp;refId=KK%2FllKMtw6jdCCmfh0zrAA%3D%3D&amp;trackingId=qMTBc4VCrzH5ZygoWnQiXA%3D%3D&amp;trk=flagship3_search_srp_jobs" id="ember234" class="disabled ember-view job-card-container__link
                      lAzJmcvyxtGwGiGJaMwYnNFRGLxxWljHaDE
                      job-card-list__title--link" aria-label="Shopify Web Developer (m/w/d)" dir="ltr">
                      <span aria-hidden="true"><strong><!---->Shopify Web Developer (m/w/d)<!----></strong></span><span class="visually-hidden"><!---->Shopify Web Developer (m/w/d)<!----></span>
                  </a>
            
</div>
            <div id="ember235" class="artdeco-entity-lockup__subtitle ember-view">
                <span class="DtHZyGNaOYStBKDLZjBlOncsboFqyDqDxY " dir="ltr">
                  <!---->Solakon GmbH<!---->
                </span>

            </div>

            <div id="ember236" class="artdeco-entity-lockup__caption ember-view">
                  <ul class="job-card-container__metadata-wrapper">
                      <li class="dnuFBnNWghFtUEmTHUHXEieLJqAiGtKMwuANkw ">
                        <span dir="ltr">
                          <!---->Germany (Remote)<!---->
                        </span>
                      </li>
<!---->                  </ul>
            </div>

<!---->
<!---->          </div>

        
</div>

            
<!---->      
            <ul class="job-card-list__footer-wrapper job-card-container__footer-wrapper flex-shrink-zero display-flex t-sans t-12 t-black--light t-normal t-roman mt1">
<!---->                          <li class="job-card-container__footer-item
                              ">
                            <time datetime="2025-07-17">
                              2 days ago
<!---->                            </time>
                          </li>
            </ul>
          <span class="visually-hidden" aria-live="polite">
<!---->          </span>
      </div>
      <div class="job-card-list__actions-container">
          
        
      <div>
          <button aria-label="Dismiss Shopify Web Developer (m/w/d) job" id="ember237" class="job-card-container__action job-card-container__action-small artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view" type="button"><!---->
<span class="artdeco-button__text">
    
            <svg role="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="close-small">
<!---->    
    <use href="#close-small" width="16" height="16"></use>
</svg>

            <span class="job-card-container__action-text"></span>
          
</span></button>
      </div>
  
      <!---->  
      </div>
    </div>
  
    </div>
  
                              
        </li>
  
              
        <li id="ember238" class="ember-view   SmCOUmLhQcYHCWzDxjUbFhltcDyHyxQmb occludable-update p0 relative scaffold-layout__list-item" data-occludable-job-id="4252686943">
            
                  
    <div>
      
    <div data-job-id="4252686943" class="display-flex job-card-container relative job-card-list
        job-card-container--clickable
        
        job-card-list--underline-title-on-hover  jobs-search-two-pane__job-card-container--viewport-tracking-7">

      <div>
        <div id="ember305" class="job-card-list__entity-lockup  artdeco-entity-lockup artdeco-entity-lockup--size-4 ember-view">
            <div id="ember306" class="job-card-list__logo  artdeco-entity-lockup__image artdeco-entity-lockup__image--type-square ember-view" type="square">
              
    <div class="ivm-image-view-model    job-card-list__logo-ivm">
        
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
<!---->          <img width="56" src="https://media.licdn.com/dms/image/v2/D4E0BAQGP4yMnen2RMA/company-logo_100_100/company-logo_100_100/0/1664358277268/velsa_io_logo?e=1755734400&amp;v=beta&amp;t=6rimehp0VTe60eqZKkIocB0gz2avGNVGVTdhlol7MXM" loading="lazy" height="56" alt="Velsa logo" id="ember307" class="ivm-view-attr__img--centered EntityPhoto-square-4   evi-image lazy-image ember-view">
    </div>
  
          </div>
  
            
</div>

          <div id="ember308" class="flex-grow-1 artdeco-entity-lockup__content ember-view">
            <div id="ember309" class="full-width artdeco-entity-lockup__title ember-view">
                  <a data-control-id="mECJihajerHiJNdSZCLtjg==" tabindex="0" href="/jobs/view/4252686943/?eBP=NOT_ELIGIBLE_FOR_CHARGING&amp;refId=KK%2FllKMtw6jdCCmfh0zrAA%3D%3D&amp;trackingId=mECJihajerHiJNdSZCLtjg%3D%3D&amp;trk=flagship3_search_srp_jobs" id="ember310" class="disabled ember-view job-card-container__link
                      lAzJmcvyxtGwGiGJaMwYnNFRGLxxWljHaDE
                      job-card-list__title--link" aria-label="Full-Stack Engineer / Frontend Developer" dir="ltr">
                      <span aria-hidden="true"><strong><!---->Full-Stack Engineer / Frontend Developer<!----></strong></span><span class="visually-hidden"><!---->Full-Stack Engineer / Frontend Developer<!----></span>
                  </a>
            
</div>
            <div id="ember311" class="artdeco-entity-lockup__subtitle ember-view">
                <span class="DtHZyGNaOYStBKDLZjBlOncsboFqyDqDxY " dir="ltr">
                  <!---->Velsa<!---->
                </span>

            </div>

            <div id="ember312" class="artdeco-entity-lockup__caption ember-view">
                  <ul class="job-card-container__metadata-wrapper">
                      <li class="dnuFBnNWghFtUEmTHUHXEieLJqAiGtKMwuANkw ">
                        <span dir="ltr">
                          <!---->Berlin, Germany (On-site)<!---->
                        </span>
                      </li>
<!---->                  </ul>
            </div>

<!---->
<!---->          </div>

        
</div>

            
          
    <div class="job-card-list__insight">
        
            <div class="display-flex align-items-center t-black--light t-12">
                <div class="mv1">
                  
    <div class="ivm-image-view-model   ">
        
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
        <svg role="img" aria-hidden="false" aria-label="Actively reviewing applicants" class="ivm-view-attr__icon ivm-view-attr__icon--signal-positive  job-card-container__job-insight-image" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-supported-dps="24x24" data-test-icon="responsive-medium">
<!---->    
    <use href="#responsive-medium" width="24" height="24"></use>
</svg>

    </div>
  
          </div>
  
                </div>
                <div class="job-card-container__job-insight-text" dir="ltr">
                  <!---->Actively reviewing applicants<!---->
                </div>
            </div>
          
    </div>
  
      
            <ul class="job-card-list__footer-wrapper job-card-container__footer-wrapper flex-shrink-zero display-flex t-sans t-12 t-black--light t-normal t-roman mt1">
<!---->                          <li class="job-card-container__footer-item
                              ">
                            <time datetime="2025-06-24">
                              3 weeks ago
<!---->                            </time>
                          </li>
                      <li class="tPAoPnRaaCgrSUQBkdHiiUWVtEaWQaEXFzOgua
                          job-card-container__footer-item inline-flex align-items-center">
                        <svg role="none" aria-hidden="true" class="job-card-list__icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="linkedin-bug-color-small">
<!---->    <svg display="var(--hue-web-svg-display-light)">
      <image href="https://static.licdn.com/aero-v1/sc/h/cukxdu7s8ldmqz13xdao5xe75" x="0" y="0" width="16" height="16"></image>
    </svg>
    <svg display="var(--hue-web-svg-display-dark)">
      <image href="https://static.licdn.com/aero-v1/sc/h/7qvn5nkkh1mlaqd5xm0radtjv" x="0" y="0" width="16" height="16"></image>
    </svg>
</svg>

                        <span dir="ltr">
                          <!---->Easy Apply<!---->
                        </span>
                      </li>
            </ul>
          <span class="visually-hidden" aria-live="polite">
<!---->          </span>
      </div>
      <div class="job-card-list__actions-container">
          
        
      <div>
          <button aria-label="Dismiss Full-Stack Engineer / Frontend Developer job" id="ember313" class="job-card-container__action job-card-container__action-small artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view" type="button"><!---->
<span class="artdeco-button__text">
    
            <svg role="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="close-small">
<!---->    
    <use href="#close-small" width="16" height="16"></use>
</svg>

            <span class="job-card-container__action-text"></span>
          
</span></button>
      </div>
  
      <!---->  
      </div>
    </div>
  
    </div>
  
                              
        </li>
  
              
        <li id="ember239" class="ember-view   SmCOUmLhQcYHCWzDxjUbFhltcDyHyxQmb occludable-update p0 relative scaffold-layout__list-item" data-occludable-job-id="4252658334">
            
                  
    <div>
      
    <div data-job-id="4252658334" class="display-flex job-card-container relative job-card-list
        job-card-container--clickable
        
        job-card-list--underline-title-on-hover jobs-search-results-list__list-item--active jobs-search-two-pane__job-card-container--viewport-tracking-8" aria-current="page">

      <div>
        <div id="ember314" class="job-card-list__entity-lockup  artdeco-entity-lockup artdeco-entity-lockup--size-4 ember-view">
            <div id="ember315" class="job-card-list__logo  artdeco-entity-lockup__image artdeco-entity-lockup__image--type-square ember-view" type="square">
              
    <div class="ivm-image-view-model    job-card-list__logo-ivm">
        
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
<!---->          <img width="56" src="https://media.licdn.com/dms/image/v2/C4D0BAQHM3ckZspX09g/company-logo_100_100/company-logo_100_100/0/1630579823094/devbite_logo?e=1755734400&amp;v=beta&amp;t=8kZPwR5pLP8fjxAc_MzXJlVm_d0Q8U0JN-VemB2KACc" loading="lazy" height="56" alt="devbite logo" id="ember316" class="ivm-view-attr__img--centered EntityPhoto-square-4   evi-image lazy-image ember-view">
    </div>
  
          </div>
  
            
</div>

          <div id="ember317" class="flex-grow-1 artdeco-entity-lockup__content ember-view">
            <div id="ember318" class="full-width artdeco-entity-lockup__title ember-view">
                  <a data-control-id="xCjASafQzfSddeMyr3kVAw==" tabindex="0" href="/jobs/view/4252658334/?eBP=NOT_ELIGIBLE_FOR_CHARGING&amp;refId=KK%2FllKMtw6jdCCmfh0zrAA%3D%3D&amp;trackingId=xCjASafQzfSddeMyr3kVAw%3D%3D&amp;trk=flagship3_search_srp_jobs" id="ember319" class="disabled ember-view job-card-container__link
                      lAzJmcvyxtGwGiGJaMwYnNFRGLxxWljHaDE
                      job-card-list__title--link" aria-label="Web Frontend Developer (w/*/m)" dir="ltr">
                      <span aria-hidden="true"><strong><!---->Web Frontend Developer (w/*/m)<!----></strong></span><span class="visually-hidden"><!---->Web Frontend Developer (w/*/m)<!----></span>
                  </a>
            
</div>
            <div id="ember320" class="artdeco-entity-lockup__subtitle ember-view">
                <span class="DtHZyGNaOYStBKDLZjBlOncsboFqyDqDxY " dir="ltr">
                  <!---->devbite<!---->
                </span>

            </div>

            <div id="ember321" class="artdeco-entity-lockup__caption ember-view">
                  <ul class="job-card-container__metadata-wrapper">
                      <li class="dnuFBnNWghFtUEmTHUHXEieLJqAiGtKMwuANkw ">
                        <span dir="ltr">
                          <!---->Dresden, Saxony, Germany (On-site)<!---->
                        </span>
                      </li>
<!---->                  </ul>
            </div>

                <div id="ember322" class="mt1 t-sans t-12 t-black--light t-normal t-roman artdeco-entity-lockup__metadata ember-view">
                  <ul class="job-card-container__metadata-wrapper">
                    <li class="dnuFBnNWghFtUEmTHUHXEieLJqAiGtKMwuANkw">
                      <span dir="ltr">
                        <!---->€3,000/month - €3,500/month<!---->
                      </span>
                    </li>
                  </ul>
                </div>

<!---->          </div>

        
</div>

            
<!---->      
            <ul class="job-card-list__footer-wrapper job-card-container__footer-wrapper flex-shrink-zero display-flex t-sans t-12 t-black--light t-normal t-roman mt1">
                    <li class="job-card-container__footer-item job-card-container__footer-job-state t-bold">
                      Viewed
                    </li>
                  <!---->            </ul>
          <span class="visually-hidden" aria-live="polite">
<!---->          </span>
      </div>
      <div class="job-card-list__actions-container">
          
        
      <div>
          <button aria-label="Dismiss Web Frontend Developer (w/*/m) job" id="ember323" class="job-card-container__action job-card-container__action-small artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view" type="button"><!---->
<span class="artdeco-button__text">
    
            <svg role="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="close-small">
<!---->    
    <use href="#close-small" width="16" height="16"></use>
</svg>

            <span class="job-card-container__action-text"></span>
          
</span></button>
      </div>
  
      <!---->  
      </div>
    </div>
  
    </div>
  
                              
        </li>
  
              
        <li id="ember240" class="ember-view   SmCOUmLhQcYHCWzDxjUbFhltcDyHyxQmb occludable-update p0 relative scaffold-layout__list-item" data-occludable-job-id="4265215966">
            
                  
    <div>
      
    <div data-job-id="4265215966" class="display-flex job-card-container relative job-card-list
        job-card-container--clickable
        
        job-card-list--underline-title-on-hover  jobs-search-two-pane__job-card-container--viewport-tracking-9">

      <div>
        <div id="ember324" class="job-card-list__entity-lockup  artdeco-entity-lockup artdeco-entity-lockup--size-4 ember-view">
            <div id="ember325" class="job-card-list__logo  artdeco-entity-lockup__image artdeco-entity-lockup__image--type-square ember-view" type="square">
              
    <div class="ivm-image-view-model    job-card-list__logo-ivm">
        
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
<!---->          <img width="56" src="https://media.licdn.com/dms/image/v2/D4E0BAQFOZMnIEMUQgA/company-logo_100_100/company-logo_100_100/0/1690810028524/holidu_logo?e=1755734400&amp;v=beta&amp;t=jbZHZ69xxtNaGjAllfvyihjO6wM_yk_qMh_eaD7Tgek" loading="lazy" height="56" alt="Holidu logo" id="ember326" class="ivm-view-attr__img--centered EntityPhoto-square-4   evi-image lazy-image ember-view">
    </div>
  
          </div>
  
            
</div>

          <div id="ember327" class="flex-grow-1 artdeco-entity-lockup__content ember-view">
            <div id="ember328" class="full-width artdeco-entity-lockup__title ember-view">
                  <a data-control-id="+xFm5mG0yBBDqSO5k9Wpkg==" tabindex="0" href="/jobs/view/4265215966/?eBP=NOT_ELIGIBLE_FOR_CHARGING&amp;refId=KK%2FllKMtw6jdCCmfh0zrAA%3D%3D&amp;trackingId=%2BxFm5mG0yBBDqSO5k9Wpkg%3D%3D&amp;trk=flagship3_search_srp_jobs" id="ember329" class="disabled ember-view job-card-container__link
                      lAzJmcvyxtGwGiGJaMwYnNFRGLxxWljHaDE
                      job-card-list__title--link" aria-label="Frontend Developer (Part time) - MarTech" dir="ltr">
                      <span aria-hidden="true"><strong><!---->Frontend Developer (Part time) - MarTech<!----></strong></span><span class="visually-hidden"><!---->Frontend Developer (Part time) - MarTech<!----></span>
                  </a>
            
</div>
            <div id="ember330" class="artdeco-entity-lockup__subtitle ember-view">
                <span class="DtHZyGNaOYStBKDLZjBlOncsboFqyDqDxY " dir="ltr">
                  <!---->Holidu<!---->
                </span>

            </div>

            <div id="ember331" class="artdeco-entity-lockup__caption ember-view">
                  <ul class="job-card-container__metadata-wrapper">
                      <li class="dnuFBnNWghFtUEmTHUHXEieLJqAiGtKMwuANkw ">
                        <span dir="ltr">
                          <!---->Munich, Bavaria, Germany (Hybrid)<!---->
                        </span>
                      </li>
<!---->                  </ul>
            </div>

<!---->
<!---->          </div>

        
</div>

            
          
    <div class="job-card-list__insight">
        
            <div class="display-flex align-items-center t-black--light t-12">
                <div class="mv1">
                  
    <div class="ivm-image-view-model   ">
        
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
        <svg role="img" aria-hidden="false" aria-label="Actively reviewing applicants" class="ivm-view-attr__icon ivm-view-attr__icon--signal-positive  job-card-container__job-insight-image" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-supported-dps="24x24" data-test-icon="responsive-medium">
<!---->    
    <use href="#responsive-medium" width="24" height="24"></use>
</svg>

    </div>
  
          </div>
  
                </div>
                <div class="job-card-container__job-insight-text" dir="ltr">
                  <!---->Actively reviewing applicants<!---->
                </div>
            </div>
          
    </div>
  
      
            <ul class="job-card-list__footer-wrapper job-card-container__footer-wrapper flex-shrink-zero display-flex t-sans t-12 t-black--light t-normal t-roman mt1">
                    <li class="job-card-container__footer-item job-card-container__footer-job-state t-bold">
                      Viewed
                    </li>
                  <!---->                      <li class="tPAoPnRaaCgrSUQBkdHiiUWVtEaWQaEXFzOgua
                          job-card-container__footer-item inline-flex align-items-center">
                        <svg role="none" aria-hidden="true" class="job-card-list__icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="linkedin-bug-color-small">
<!---->    <svg display="var(--hue-web-svg-display-light)">
      <image href="https://static.licdn.com/aero-v1/sc/h/cukxdu7s8ldmqz13xdao5xe75" x="0" y="0" width="16" height="16"></image>
    </svg>
    <svg display="var(--hue-web-svg-display-dark)">
      <image href="https://static.licdn.com/aero-v1/sc/h/7qvn5nkkh1mlaqd5xm0radtjv" x="0" y="0" width="16" height="16"></image>
    </svg>
</svg>

                        <span dir="ltr">
                          <!---->Easy Apply<!---->
                        </span>
                      </li>
            </ul>
          <span class="visually-hidden" aria-live="polite">
<!---->          </span>
      </div>
      <div class="job-card-list__actions-container">
          
        
      <div>
          <button aria-label="Dismiss Frontend Developer (Part time) - MarTech job" id="ember332" class="job-card-container__action job-card-container__action-small artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view" type="button"><!---->
<span class="artdeco-button__text">
    
            <svg role="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="close-small">
<!---->    
    <use href="#close-small" width="16" height="16"></use>
</svg>

            <span class="job-card-container__action-text"></span>
          
</span></button>
      </div>
  
      <!---->  
      </div>
    </div>
  
    </div>
  
                              
        </li>
  
              
        <li id="ember241" class="ember-view   SmCOUmLhQcYHCWzDxjUbFhltcDyHyxQmb occludable-update p0 relative scaffold-layout__list-item" data-occludable-job-id="4217057466">
            
                  
    <div>
      
    <div data-job-id="4217057466" class="display-flex job-card-container relative job-card-list
        job-card-container--clickable
        
        job-card-list--underline-title-on-hover  jobs-search-two-pane__job-card-container--viewport-tracking-10">

      <div>
        <div id="ember333" class="job-card-list__entity-lockup  artdeco-entity-lockup artdeco-entity-lockup--size-4 ember-view">
            <div id="ember334" class="job-card-list__logo  artdeco-entity-lockup__image artdeco-entity-lockup__image--type-square ember-view" type="square">
              
    <div class="ivm-image-view-model    job-card-list__logo-ivm">
        
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
<!---->          <img width="56" src="https://media.licdn.com/dms/image/v2/C560BAQFrWmjNC_BObQ/company-logo_100_100/company-logo_100_100/0/1631341331557?e=1755734400&amp;v=beta&amp;t=7-FY-UbqLXHYkvpZ6tqKtCtCFv5pgT2RsWzeOtx91iw" loading="lazy" height="56" alt="SC-Networks GmbH logo" id="ember335" class="ivm-view-attr__img--centered EntityPhoto-square-4   evi-image lazy-image ember-view">
    </div>
  
          </div>
  
            
</div>

          <div id="ember336" class="flex-grow-1 artdeco-entity-lockup__content ember-view">
            <div id="ember337" class="full-width artdeco-entity-lockup__title ember-view">
                  <a data-control-id="zv7yiFShJ9mjOymreMOB1Q==" tabindex="0" href="/jobs/view/4217057466/?eBP=NOT_ELIGIBLE_FOR_CHARGING&amp;refId=KK%2FllKMtw6jdCCmfh0zrAA%3D%3D&amp;trackingId=zv7yiFShJ9mjOymreMOB1Q%3D%3D&amp;trk=flagship3_search_srp_jobs" id="ember338" class="disabled ember-view job-card-container__link
                      lAzJmcvyxtGwGiGJaMwYnNFRGLxxWljHaDE
                      job-card-list__title--link" aria-label="JavaScript Frontend Entwickler (m/w/d) in Starnberg" dir="ltr">
                      <span aria-hidden="true"><strong><!---->JavaScript Frontend Entwickler (m/w/d) in Starnberg<!----></strong></span><span class="visually-hidden"><!---->JavaScript Frontend Entwickler (m/w/d) in Starnberg<!----></span>
                  </a>
            
</div>
            <div id="ember339" class="artdeco-entity-lockup__subtitle ember-view">
                <span class="DtHZyGNaOYStBKDLZjBlOncsboFqyDqDxY " dir="ltr">
                  <!---->SC-Networks GmbH<!---->
                </span>

            </div>

            <div id="ember340" class="artdeco-entity-lockup__caption ember-view">
                  <ul class="job-card-container__metadata-wrapper">
                      <li class="dnuFBnNWghFtUEmTHUHXEieLJqAiGtKMwuANkw ">
                        <span dir="ltr">
                          <!---->Starnberg, Bavaria, Germany (On-site)<!---->
                        </span>
                      </li>
<!---->                  </ul>
            </div>

<!---->
<!---->          </div>

        
</div>

            
<!---->      
            <ul class="job-card-list__footer-wrapper job-card-container__footer-wrapper flex-shrink-zero display-flex t-sans t-12 t-black--light t-normal t-roman mt1">
<!---->                          <li class="job-card-container__footer-item
                              ">
                            <time datetime="2025-04-03">
                              3 months ago
<!---->                            </time>
                          </li>
            </ul>
          <span class="visually-hidden" aria-live="polite">
<!---->          </span>
      </div>
      <div class="job-card-list__actions-container">
          
        
      <div>
          <button aria-label="Dismiss JavaScript Frontend Entwickler (m/w/d) in Starnberg job" id="ember341" class="job-card-container__action job-card-container__action-small artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view" type="button"><!---->
<span class="artdeco-button__text">
    
            <svg role="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="close-small">
<!---->    
    <use href="#close-small" width="16" height="16"></use>
</svg>

            <span class="job-card-container__action-text"></span>
          
</span></button>
      </div>
  
      <!---->  
      </div>
    </div>
  
    </div>
  
                              
        </li>
  
              
        <li id="ember242" class="ember-view   SmCOUmLhQcYHCWzDxjUbFhltcDyHyxQmb occludable-update p0 relative scaffold-layout__list-item" data-occludable-job-id="4260301114">
            
                  
    <div>
      
    <div data-job-id="4260301114" class="display-flex job-card-container relative job-card-list
        job-card-container--clickable
        
        job-card-list--underline-title-on-hover  jobs-search-two-pane__job-card-container--viewport-tracking-11">

      <div>
        <div id="ember342" class="job-card-list__entity-lockup  artdeco-entity-lockup artdeco-entity-lockup--size-4 ember-view">
            <div id="ember343" class="job-card-list__logo  artdeco-entity-lockup__image artdeco-entity-lockup__image--type-square ember-view" type="square">
              
    <div class="ivm-image-view-model    job-card-list__logo-ivm">
        
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
<!---->          <img width="56" src="https://media.licdn.com/dms/image/v2/C4E0BAQFMJnvkGsBftQ/company-logo_100_100/company-logo_100_100/0/1673691382580/diesdas_digital_logo?e=1755734400&amp;v=beta&amp;t=1X_Jz2DOYpo05JVqHhKLZDpjsOWprRRjUQnkmJTNOmg" loading="lazy" height="56" alt="Diesdas Digital logo" id="ember344" class="ivm-view-attr__img--centered EntityPhoto-square-4   evi-image lazy-image ember-view">
    </div>
  
          </div>
  
            
</div>

          <div id="ember345" class="flex-grow-1 artdeco-entity-lockup__content ember-view">
            <div id="ember346" class="full-width artdeco-entity-lockup__title ember-view">
                  <a data-control-id="hNg1L4uXL6Qk+p+U0POr0A==" tabindex="0" href="/jobs/view/4260301114/?eBP=NOT_ELIGIBLE_FOR_CHARGING&amp;refId=KK%2FllKMtw6jdCCmfh0zrAA%3D%3D&amp;trackingId=hNg1L4uXL6Qk%2Bp%2BU0POr0A%3D%3D&amp;trk=flagship3_search_srp_jobs" id="ember347" class="disabled ember-view job-card-container__link
                      lAzJmcvyxtGwGiGJaMwYnNFRGLxxWljHaDE
                      job-card-list__title--link" aria-label="Front-End Developer" dir="ltr">
                      <span aria-hidden="true"><strong><!---->Front-End Developer<!----></strong></span><span class="visually-hidden"><!---->Front-End Developer<!----></span>
                  </a>
            
</div>
            <div id="ember348" class="artdeco-entity-lockup__subtitle ember-view">
                <span class="DtHZyGNaOYStBKDLZjBlOncsboFqyDqDxY " dir="ltr">
                  <!---->Diesdas Digital<!---->
                </span>

            </div>

            <div id="ember349" class="artdeco-entity-lockup__caption ember-view">
                  <ul class="job-card-container__metadata-wrapper">
                      <li class="dnuFBnNWghFtUEmTHUHXEieLJqAiGtKMwuANkw ">
                        <span dir="ltr">
                          <!---->Berlin, Berlin, Germany (On-site)<!---->
                        </span>
                      </li>
<!---->                  </ul>
            </div>

<!---->
<!---->          </div>

        
</div>

            
<!---->      
            <ul class="job-card-list__footer-wrapper job-card-container__footer-wrapper flex-shrink-zero display-flex t-sans t-12 t-black--light t-normal t-roman mt1">
                    <li class="job-card-container__footer-item job-card-container__footer-job-state t-bold">
                      Viewed
                    </li>
                  <!---->            </ul>
          <span class="visually-hidden" aria-live="polite">
<!---->          </span>
      </div>
      <div class="job-card-list__actions-container">
          
        
      <div>
          <button aria-label="Dismiss Front-End Developer job" id="ember350" class="job-card-container__action job-card-container__action-small artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view" type="button"><!---->
<span class="artdeco-button__text">
    
            <svg role="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="close-small">
<!---->    
    <use href="#close-small" width="16" height="16"></use>
</svg>

            <span class="job-card-container__action-text"></span>
          
</span></button>
      </div>
  
      <!---->  
      </div>
    </div>
  
    </div>
  
                              
        </li>
  
              
        <li id="ember243" class="ember-view   SmCOUmLhQcYHCWzDxjUbFhltcDyHyxQmb occludable-update p0 relative scaffold-layout__list-item" data-occludable-job-id="4253128823">
            
                  
    <div>
      
    <div data-job-id="4253128823" class="display-flex job-card-container relative job-card-list
        job-card-container--clickable
        
        job-card-list--underline-title-on-hover  jobs-search-two-pane__job-card-container--viewport-tracking-12">

      <div>
        <div id="ember354" class="job-card-list__entity-lockup  artdeco-entity-lockup artdeco-entity-lockup--size-4 ember-view">
            <div id="ember355" class="job-card-list__logo  artdeco-entity-lockup__image artdeco-entity-lockup__image--type-square ember-view" type="square">
              
    <div class="ivm-image-view-model    job-card-list__logo-ivm">
        
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
<!---->          <img width="56" src="https://media.licdn.com/dms/image/v2/D4E0BAQGjd8G3ytHMCw/company-logo_100_100/company-logo_100_100/0/1688216744348/kayak_logo?e=1755734400&amp;v=beta&amp;t=bRZt_qGfKF7Nc0dH87kKahQUzDZPPQ1ErVjH0McgD5I" loading="lazy" height="56" alt="KAYAK logo" id="ember356" class="ivm-view-attr__img--centered EntityPhoto-square-4   evi-image lazy-image ember-view">
    </div>
  
          </div>
  
            
</div>

          <div id="ember357" class="flex-grow-1 artdeco-entity-lockup__content ember-view">
            <div id="ember358" class="full-width artdeco-entity-lockup__title ember-view">
                  <a data-control-id="2fULzlPnS8BunX24kT/eJQ==" tabindex="0" href="/jobs/view/4253128823/?eBP=NOT_ELIGIBLE_FOR_CHARGING&amp;refId=KK%2FllKMtw6jdCCmfh0zrAA%3D%3D&amp;trackingId=2fULzlPnS8BunX24kT%2FeJQ%3D%3D&amp;trk=flagship3_search_srp_jobs" id="ember359" class="disabled ember-view job-card-container__link
                      lAzJmcvyxtGwGiGJaMwYnNFRGLxxWljHaDE
                      job-card-list__title--link" aria-label="Front-End Software Engineer with verification" dir="ltr">
                      <span aria-hidden="true"><strong><!---->Front-End Software Engineer<!----></strong><span class="white-space-pre"> </span><!----><!----><span class="tvm__text tvm__text--low-emphasis"><svg role="none" aria-hidden="true" class="text-view-model__verified-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="verified-small">
<!---->    
    <use href="#verified-small" width="16" height="16"></use>
</svg>
</span></span><span class="visually-hidden"><!---->Front-End Software Engineer with verification<!----></span>
                  </a>
            
</div>
            <div id="ember360" class="artdeco-entity-lockup__subtitle ember-view">
                <span class="DtHZyGNaOYStBKDLZjBlOncsboFqyDqDxY " dir="ltr">
                  <!---->KAYAK<!---->
                </span>

            </div>

            <div id="ember361" class="artdeco-entity-lockup__caption ember-view">
                  <ul class="job-card-container__metadata-wrapper">
                      <li class="dnuFBnNWghFtUEmTHUHXEieLJqAiGtKMwuANkw ">
                        <span dir="ltr">
                          <!---->Berlin, Berlin, Germany<!---->
                        </span>
                      </li>
<!---->                  </ul>
            </div>

<!---->
<!---->          </div>

        
</div>

            
<!---->      
            <ul class="job-card-list__footer-wrapper job-card-container__footer-wrapper flex-shrink-zero display-flex t-sans t-12 t-black--light t-normal t-roman mt1">
                    <li class="job-card-container__footer-item job-card-container__footer-job-state t-bold">
                      Viewed
                    </li>
                  <!---->            </ul>
          <span class="visually-hidden" aria-live="polite">
<!---->          </span>
      </div>
      <div class="job-card-list__actions-container">
          
        
      <div>
          <button aria-label="Dismiss Front-End Software Engineer job" id="ember362" class="job-card-container__action job-card-container__action-small artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view" type="button"><!---->
<span class="artdeco-button__text">
    
            <svg role="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="close-small">
<!---->    
    <use href="#close-small" width="16" height="16"></use>
</svg>

            <span class="job-card-container__action-text"></span>
          
</span></button>
      </div>
  
      <!---->  
      </div>
    </div>
  
    </div>
  
                              
        </li>
  
              
        <li id="ember244" class="ember-view   SmCOUmLhQcYHCWzDxjUbFhltcDyHyxQmb occludable-update p0 relative scaffold-layout__list-item" data-occludable-job-id="4267460915">
            
                  
    <div>
      
    <div data-job-id="4267460915" class="display-flex job-card-container relative job-card-list
        job-card-container--clickable
        
        job-card-list--underline-title-on-hover  jobs-search-two-pane__job-card-container--viewport-tracking-13">

      <div>
        <div id="ember363" class="job-card-list__entity-lockup  artdeco-entity-lockup artdeco-entity-lockup--size-4 ember-view">
            <div id="ember364" class="job-card-list__logo  artdeco-entity-lockup__image artdeco-entity-lockup__image--type-square ember-view" type="square">
              
    <div class="ivm-image-view-model    job-card-list__logo-ivm">
        
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
<!---->          <img width="56" src="https://media.licdn.com/dms/image/v2/D4D0BAQGUKsfjHB8RNQ/company-logo_100_100/company-logo_100_100/0/1735368022724/stealth_startup_51_logo?e=1755734400&amp;v=beta&amp;t=diBu-YKE3NKP-vLUfMBj0AGUmffG779xM_4L6NJUYWs" loading="lazy" height="56" alt="Stealth Startup logo" id="ember365" class="ivm-view-attr__img--centered EntityPhoto-square-4   evi-image lazy-image ember-view">
    </div>
  
          </div>
  
            
</div>

          <div id="ember366" class="flex-grow-1 artdeco-entity-lockup__content ember-view">
            <div id="ember367" class="full-width artdeco-entity-lockup__title ember-view">
                  <a data-control-id="lIoO5EBINfQuUwXDIhpclw==" tabindex="0" href="/jobs/view/4267460915/?eBP=NOT_ELIGIBLE_FOR_CHARGING&amp;refId=KK%2FllKMtw6jdCCmfh0zrAA%3D%3D&amp;trackingId=lIoO5EBINfQuUwXDIhpclw%3D%3D&amp;trk=flagship3_search_srp_jobs" id="ember368" class="disabled ember-view job-card-container__link
                      lAzJmcvyxtGwGiGJaMwYnNFRGLxxWljHaDE
                      job-card-list__title--link" aria-label="Full Stack Engineer [32415]" dir="ltr">
                      <span aria-hidden="true"><strong><!---->Full Stack Engineer [32415]<!----></strong></span><span class="visually-hidden"><!---->Full Stack Engineer [32415]<!----></span>
                  </a>
            
</div>
            <div id="ember369" class="artdeco-entity-lockup__subtitle ember-view">
                <span class="DtHZyGNaOYStBKDLZjBlOncsboFqyDqDxY " dir="ltr">
                  <!---->Stealth Startup<!---->
                </span>

            </div>

            <div id="ember370" class="artdeco-entity-lockup__caption ember-view">
                  <ul class="job-card-container__metadata-wrapper">
                      <li class="dnuFBnNWghFtUEmTHUHXEieLJqAiGtKMwuANkw ">
                        <span dir="ltr">
                          <!---->European Union (Remote)<!---->
                        </span>
                      </li>
<!---->                  </ul>
            </div>

<!---->
<!---->          </div>

        
</div>

            
          
    <div class="job-card-list__insight">
        
            <div class="display-flex align-items-center t-black--light t-12">
                <div class="mv1">
                  
    <div class="ivm-image-view-model   ">
        
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
        <svg role="img" aria-hidden="false" aria-label="Company review time is typically 1 week" class="ivm-view-attr__icon ivm-view-attr__icon--signal-positive  job-card-container__job-insight-image" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-supported-dps="24x24" data-test-icon="responsive-medium">
<!---->    
    <use href="#responsive-medium" width="24" height="24"></use>
</svg>

    </div>
  
          </div>
  
                </div>
                <div class="job-card-container__job-insight-text" dir="ltr">
                  <!---->Company review time is typically 1 week<!---->
                </div>
            </div>
          
    </div>
  
      
            <ul class="job-card-list__footer-wrapper job-card-container__footer-wrapper flex-shrink-zero display-flex t-sans t-12 t-black--light t-normal t-roman mt1">
<!---->                          <li class="job-card-container__footer-item
                              ">
                            <time datetime="2025-07-18">
                              1 day ago
<!---->                            </time>
                          </li>
                      <li class="tPAoPnRaaCgrSUQBkdHiiUWVtEaWQaEXFzOgua
                          job-card-container__footer-item inline-flex align-items-center">
                        <svg role="none" aria-hidden="true" class="job-card-list__icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="linkedin-bug-color-small">
<!---->    <svg display="var(--hue-web-svg-display-light)">
      <image href="https://static.licdn.com/aero-v1/sc/h/cukxdu7s8ldmqz13xdao5xe75" x="0" y="0" width="16" height="16"></image>
    </svg>
    <svg display="var(--hue-web-svg-display-dark)">
      <image href="https://static.licdn.com/aero-v1/sc/h/7qvn5nkkh1mlaqd5xm0radtjv" x="0" y="0" width="16" height="16"></image>
    </svg>
</svg>

                        <span dir="ltr">
                          <!---->Easy Apply<!---->
                        </span>
                      </li>
            </ul>
          <span class="visually-hidden" aria-live="polite">
<!---->          </span>
      </div>
      <div class="job-card-list__actions-container">
          
        
      <div>
          <button aria-label="Dismiss Full Stack Engineer [32415] job" id="ember371" class="job-card-container__action job-card-container__action-small artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view" type="button"><!---->
<span class="artdeco-button__text">
    
            <svg role="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="close-small">
<!---->    
    <use href="#close-small" width="16" height="16"></use>
</svg>

            <span class="job-card-container__action-text"></span>
          
</span></button>
      </div>
  
      <!---->  
      </div>
    </div>
  
    </div>
  
                              
        </li>
  
              
        <li id="ember245" class="ember-view   SmCOUmLhQcYHCWzDxjUbFhltcDyHyxQmb occludable-update p0 relative scaffold-layout__list-item" data-occludable-job-id="4257982338">
            
                  
    <div>
      
    <div data-job-id="4257982338" class="display-flex job-card-container relative job-card-list
        job-card-container--clickable
        
        job-card-list--underline-title-on-hover  jobs-search-two-pane__job-card-container--viewport-tracking-14">

      <div>
        <div id="ember381" class="job-card-list__entity-lockup  artdeco-entity-lockup artdeco-entity-lockup--size-4 ember-view">
            <div id="ember382" class="job-card-list__logo  artdeco-entity-lockup__image artdeco-entity-lockup__image--type-square ember-view" type="square">
              
    <div class="ivm-image-view-model    job-card-list__logo-ivm">
        
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
<!---->          <img width="56" src="https://media.licdn.com/dms/image/v2/C4E0BAQFNX5V3wS-qHw/company-logo_100_100/company-logo_100_100/0/1670579393858/globus_baumarkt_logo?e=1755734400&amp;v=beta&amp;t=ilUTvvUGSzwJofVpIhFg1v3WbQRRauY81Ql-DZM8axE" loading="lazy" height="56" alt="Globus Baumarkt logo" id="ember383" class="ivm-view-attr__img--centered EntityPhoto-square-4   evi-image lazy-image ember-view">
    </div>
  
          </div>
  
            
</div>

          <div id="ember384" class="flex-grow-1 artdeco-entity-lockup__content ember-view">
            <div id="ember385" class="full-width artdeco-entity-lockup__title ember-view">
                  <a data-control-id="YijOaqsoqRYRvMr6UTft7A==" tabindex="0" href="/jobs/view/4257982338/?eBP=NOT_ELIGIBLE_FOR_CHARGING&amp;refId=KK%2FllKMtw6jdCCmfh0zrAA%3D%3D&amp;trackingId=YijOaqsoqRYRvMr6UTft7A%3D%3D&amp;trk=flagship3_search_srp_jobs" id="ember386" class="disabled ember-view job-card-container__link
                      lAzJmcvyxtGwGiGJaMwYnNFRGLxxWljHaDE
                      job-card-list__title--link" aria-label="Frontend Developer (m/w/d) - (Zentrale)" dir="ltr">
                      <span aria-hidden="true"><strong><!---->Frontend Developer (m/w/d) - (Zentrale)<!----></strong></span><span class="visually-hidden"><!---->Frontend Developer (m/w/d) - (Zentrale)<!----></span>
                  </a>
            
</div>
            <div id="ember387" class="artdeco-entity-lockup__subtitle ember-view">
                <span class="DtHZyGNaOYStBKDLZjBlOncsboFqyDqDxY " dir="ltr">
                  <!---->Globus Baumarkt<!---->
                </span>

            </div>

            <div id="ember388" class="artdeco-entity-lockup__caption ember-view">
                  <ul class="job-card-container__metadata-wrapper">
                      <li class="dnuFBnNWghFtUEmTHUHXEieLJqAiGtKMwuANkw ">
                        <span dir="ltr">
                          <!---->Völklingen, Saarland, Germany (Hybrid)<!---->
                        </span>
                      </li>
<!---->                  </ul>
            </div>

<!---->
<!---->          </div>

        
</div>

            
<!---->      
            <ul class="job-card-list__footer-wrapper job-card-container__footer-wrapper flex-shrink-zero display-flex t-sans t-12 t-black--light t-normal t-roman mt1">
<!---->                          <li class="job-card-container__footer-item
                              ">
                            <time datetime="2025-06-30">
                              2 weeks ago
<!---->                            </time>
                          </li>
            </ul>
          <span class="visually-hidden" aria-live="polite">
<!---->          </span>
      </div>
      <div class="job-card-list__actions-container">
          
        
      <div>
          <button aria-label="Dismiss Frontend Developer (m/w/d) - (Zentrale) job" id="ember389" class="job-card-container__action job-card-container__action-small artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view" type="button"><!---->
<span class="artdeco-button__text">
    
            <svg role="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="close-small">
<!---->    
    <use href="#close-small" width="16" height="16"></use>
</svg>

            <span class="job-card-container__action-text"></span>
          
</span></button>
      </div>
  
      <!---->  
      </div>
    </div>
  
    </div>
  
                              
        </li>
  
              
        <li id="ember246" class="ember-view   SmCOUmLhQcYHCWzDxjUbFhltcDyHyxQmb occludable-update p0 relative scaffold-layout__list-item" data-occludable-job-id="4267445563">
            
                  
    <div>
      
    <div data-job-id="4267445563" class="display-flex job-card-container relative job-card-list
        job-card-container--clickable
        
        job-card-list--underline-title-on-hover  jobs-search-two-pane__job-card-container--viewport-tracking-15">

      <div>
        <div id="ember372" class="job-card-list__entity-lockup  artdeco-entity-lockup artdeco-entity-lockup--size-4 ember-view">
            <div id="ember373" class="job-card-list__logo  artdeco-entity-lockup__image artdeco-entity-lockup__image--type-square ember-view" type="square">
              
    <div class="ivm-image-view-model    job-card-list__logo-ivm">
        
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
<!---->          <img width="56" src="https://media.licdn.com/dms/image/v2/C560BAQEiVkG1l_2zZw/company-logo_100_100/company-logo_100_100/0/1631333912051?e=1755734400&amp;v=beta&amp;t=iFvenuz0bxN6YbZIpXPwMPbgurJSlCa9qqI6tUfV9T0" loading="lazy" height="56" alt="EvoLogics GmbH logo" id="ember374" class="ivm-view-attr__img--centered EntityPhoto-square-4   evi-image lazy-image ember-view">
    </div>
  
          </div>
  
            
</div>

          <div id="ember375" class="flex-grow-1 artdeco-entity-lockup__content ember-view">
            <div id="ember376" class="full-width artdeco-entity-lockup__title ember-view">
                  <a data-control-id="kpd5mKiw0UI5XJEntSyDHg==" tabindex="0" href="/jobs/view/4267445563/?eBP=NOT_ELIGIBLE_FOR_CHARGING&amp;refId=KK%2FllKMtw6jdCCmfh0zrAA%3D%3D&amp;trackingId=kpd5mKiw0UI5XJEntSyDHg%3D%3D&amp;trk=flagship3_search_srp_jobs" id="ember377" class="disabled ember-view job-card-container__link
                      lAzJmcvyxtGwGiGJaMwYnNFRGLxxWljHaDE
                      job-card-list__title--link" aria-label="UI-Entwickler (m/f/d)" dir="ltr">
                      <span aria-hidden="true"><strong><!---->UI-Entwickler (m/f/d)<!----></strong></span><span class="visually-hidden"><!---->UI-Entwickler (m/f/d)<!----></span>
                  </a>
            
</div>
            <div id="ember378" class="artdeco-entity-lockup__subtitle ember-view">
                <span class="DtHZyGNaOYStBKDLZjBlOncsboFqyDqDxY " dir="ltr">
                  <!---->EvoLogics GmbH<!---->
                </span>

            </div>

            <div id="ember379" class="artdeco-entity-lockup__caption ember-view">
                  <ul class="job-card-container__metadata-wrapper">
                      <li class="dnuFBnNWghFtUEmTHUHXEieLJqAiGtKMwuANkw ">
                        <span dir="ltr">
                          <!---->Berlin, Berlin, Germany (On-site)<!---->
                        </span>
                      </li>
<!---->                  </ul>
            </div>

<!---->
<!---->          </div>

        
</div>

            
<!---->      
            <ul class="job-card-list__footer-wrapper job-card-container__footer-wrapper flex-shrink-zero display-flex t-sans t-12 t-black--light t-normal t-roman mt1">
<!---->                          <li class="job-card-container__footer-item
                              ">
                            <time datetime="2025-07-18">
                              2 days ago
<!---->                            </time>
                          </li>
                      <li class="job-card-container__footer-item inline-flex align-items-center">
                        <span dir="ltr">
                          <strong><span class="tvm__text tvm__text--positive"><!---->Be an early applicant<!----></span></strong>
                        </span>
                      </li>
                                </ul>
          <span class="visually-hidden" aria-live="polite">
<!---->          </span>
      </div>
      <div class="job-card-list__actions-container">
          
        
      <div>
          <button aria-label="Dismiss UI-Entwickler (m/f/d) job" id="ember380" class="job-card-container__action job-card-container__action-small artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view" type="button"><!---->
<span class="artdeco-button__text">
    
            <svg role="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="close-small">
<!---->    
    <use href="#close-small" width="16" height="16"></use>
</svg>

            <span class="job-card-container__action-text"></span>
          
</span></button>
      </div>
  
      <!---->  
      </div>
    </div>
  
    </div>
  
                              
        </li>
  
              
        <li id="ember247" class="ember-view   SmCOUmLhQcYHCWzDxjUbFhltcDyHyxQmb occludable-update p0 relative scaffold-layout__list-item" data-occludable-job-id="4268776100">
            
                  
    <div>
      
    <div data-job-id="4268776100" class="display-flex job-card-container relative job-card-list
        job-card-container--clickable
        
        job-card-list--underline-title-on-hover  jobs-search-two-pane__job-card-container--viewport-tracking-16">

      <div>
        <div id="ember390" class="job-card-list__entity-lockup  artdeco-entity-lockup artdeco-entity-lockup--size-4 ember-view">
            <div id="ember391" class="job-card-list__logo  artdeco-entity-lockup__image artdeco-entity-lockup__image--type-square ember-view" type="square">
              
    <div class="ivm-image-view-model    job-card-list__logo-ivm">
        
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
<!---->          <img width="56" src="https://media.licdn.com/dms/image/v2/D4D0BAQGftUJaAnPIxg/company-logo_100_100/company-logo_100_100/0/1688654635337/bendingspoons_logo?e=1755734400&amp;v=beta&amp;t=X7DfGnqZfFovRCyeBfWarLhF0vZEmJ1pcZu-eWJ8ctM" loading="lazy" height="56" alt="Bending Spoons logo" id="ember392" class="ivm-view-attr__img--centered EntityPhoto-square-4   evi-image lazy-image ember-view">
    </div>
  
          </div>
  
            
</div>

          <div id="ember393" class="flex-grow-1 artdeco-entity-lockup__content ember-view">
            <div id="ember394" class="full-width artdeco-entity-lockup__title ember-view">
                  <a data-control-id="9Ikqr/HfP/gEw227Ci2Ywg==" tabindex="0" href="/jobs/view/4268776100/?eBP=NOT_ELIGIBLE_FOR_CHARGING&amp;refId=KK%2FllKMtw6jdCCmfh0zrAA%3D%3D&amp;trackingId=9Ikqr%2FHfP%2FgEw227Ci2Ywg%3D%3D&amp;trk=flagship3_search_srp_jobs" id="ember395" class="disabled ember-view job-card-container__link
                      lAzJmcvyxtGwGiGJaMwYnNFRGLxxWljHaDE
                      job-card-list__title--link" aria-label="Software Engineer with verification" dir="ltr">
                      <span aria-hidden="true"><strong><!---->Software Engineer<!----></strong><span class="white-space-pre"> </span><!----><!----><span class="tvm__text tvm__text--low-emphasis"><svg role="none" aria-hidden="true" class="text-view-model__verified-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="verified-small">
<!---->    
    <use href="#verified-small" width="16" height="16"></use>
</svg>
</span></span><span class="visually-hidden"><!---->Software Engineer with verification<!----></span>
                  </a>
            
</div>
            <div id="ember396" class="artdeco-entity-lockup__subtitle ember-view">
                <span class="DtHZyGNaOYStBKDLZjBlOncsboFqyDqDxY " dir="ltr">
                  <!---->Bending Spoons<!---->
                </span>

            </div>

            <div id="ember397" class="artdeco-entity-lockup__caption ember-view">
                  <ul class="job-card-container__metadata-wrapper">
                      <li class="dnuFBnNWghFtUEmTHUHXEieLJqAiGtKMwuANkw ">
                        <span dir="ltr">
                          <!---->Bonn, North Rhine-Westphalia, Germany (Hybrid)<!---->
                        </span>
                      </li>
<!---->                  </ul>
            </div>

<!---->
<!---->          </div>

        
</div>

            
<!---->      
            <ul class="job-card-list__footer-wrapper job-card-container__footer-wrapper flex-shrink-zero display-flex t-sans t-12 t-black--light t-normal t-roman mt1">
<!---->                          <li class="job-card-container__footer-item
                              ">
                            <time datetime="2025-07-18">
                              1 day ago
<!---->                            </time>
                          </li>
                      <li class="job-card-container__footer-item inline-flex align-items-center">
                        <span dir="ltr">
                          <strong><span class="tvm__text tvm__text--positive"><!---->Be an early applicant<!----></span></strong>
                        </span>
                      </li>
                                </ul>
          <span class="visually-hidden" aria-live="polite">
<!---->          </span>
      </div>
      <div class="job-card-list__actions-container">
          
        
      <div>
          <button aria-label="Dismiss Software Engineer job" id="ember398" class="job-card-container__action job-card-container__action-small artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view" type="button"><!---->
<span class="artdeco-button__text">
    
            <svg role="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="close-small">
<!---->    
    <use href="#close-small" width="16" height="16"></use>
</svg>

            <span class="job-card-container__action-text"></span>
          
</span></button>
      </div>
  
      <!---->  
      </div>
    </div>
  
    </div>
  
                              
        </li>
  
              
        <li id="ember248" class="ember-view   SmCOUmLhQcYHCWzDxjUbFhltcDyHyxQmb occludable-update p0 relative scaffold-layout__list-item" data-occludable-job-id="4260027233">
            
                  
    <div>
      
    <div data-job-id="4260027233" class="display-flex job-card-container relative job-card-list
        job-card-container--clickable
        
        job-card-list--underline-title-on-hover  jobs-search-two-pane__job-card-container--viewport-tracking-17">

      <div>
        <div id="ember399" class="job-card-list__entity-lockup  artdeco-entity-lockup artdeco-entity-lockup--size-4 ember-view">
            <div id="ember400" class="job-card-list__logo  artdeco-entity-lockup__image artdeco-entity-lockup__image--type-square ember-view" type="square">
              
    <div class="ivm-image-view-model    job-card-list__logo-ivm">
        
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
<!---->          <img width="56" src="https://media.licdn.com/dms/image/v2/D4E0BAQHUdqpdMeGNbw/company-logo_100_100/company-logo_100_100/0/1707122409829/staffbase_logo?e=1755734400&amp;v=beta&amp;t=43D3PeawxuO15pq5tOq9EXAXGl_B5ZT2cGsFDgpwkvo" loading="lazy" height="56" alt="Staffbase logo" id="ember401" class="ivm-view-attr__img--centered EntityPhoto-square-4   evi-image lazy-image ember-view">
    </div>
  
          </div>
  
            
</div>

          <div id="ember402" class="flex-grow-1 artdeco-entity-lockup__content ember-view">
            <div id="ember403" class="full-width artdeco-entity-lockup__title ember-view">
                  <a data-control-id="7zJz+NgQy0K+jqzUcQP7Mg==" tabindex="0" href="/jobs/view/4260027233/?eBP=NOT_ELIGIBLE_FOR_CHARGING&amp;refId=KK%2FllKMtw6jdCCmfh0zrAA%3D%3D&amp;trackingId=7zJz%2BNgQy0K%2BjqzUcQP7Mg%3D%3D&amp;trk=flagship3_search_srp_jobs" id="ember404" class="disabled ember-view job-card-container__link
                      lAzJmcvyxtGwGiGJaMwYnNFRGLxxWljHaDE
                      job-card-list__title--link" aria-label="Fullstack Engineer with verification" dir="ltr">
                      <span aria-hidden="true"><strong><!---->Fullstack Engineer<!----></strong><span class="white-space-pre"> </span><!----><!----><span class="tvm__text tvm__text--low-emphasis"><svg role="none" aria-hidden="true" class="text-view-model__verified-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="verified-small">
<!---->    
    <use href="#verified-small" width="16" height="16"></use>
</svg>
</span></span><span class="visually-hidden"><!---->Fullstack Engineer with verification<!----></span>
                  </a>
            
</div>
            <div id="ember405" class="artdeco-entity-lockup__subtitle ember-view">
                <span class="DtHZyGNaOYStBKDLZjBlOncsboFqyDqDxY " dir="ltr">
                  <!---->Staffbase<!---->
                </span>

            </div>

            <div id="ember406" class="artdeco-entity-lockup__caption ember-view">
                  <ul class="job-card-container__metadata-wrapper">
                      <li class="dnuFBnNWghFtUEmTHUHXEieLJqAiGtKMwuANkw ">
                        <span dir="ltr">
                          <!---->Bernau, Brandenburg, Germany<!---->
                        </span>
                      </li>
<!---->                  </ul>
            </div>

<!---->
<!---->          </div>

        
</div>

            
          
    <div class="job-card-list__insight">
        
            <div class="display-flex align-items-center t-black--light t-12">
                <div class="mv1">
                  
    <div class="ivm-image-view-model   ">
        <ul class="ivm-image-view-model__img-list--stacked list-style-none display-flex justify-center">
            <li class="ivm-image-view-model__img-list-item--stacked">
              
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
<!---->          <img width="32" src="https://media.licdn.com/dms/image/v2/D4E03AQElT0k8jWAPig/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1704190106044?e=1755734400&amp;v=beta&amp;t=Tk5IJ4b0NDrIK45SFDs01hTF4MalQoFmDf0wR--Op8c" loading="lazy" height="32" alt="" id="ember407" class="ivm-view-attr__img--centered ivm-view-attr__img--stacked ivm-view-attr__img--stacked-circle-size-1 EntityPhoto-circle-1-stackedFacepile  job-card-container__job-insight-image evi-image lazy-image ember-view">
    </div>
  
            </li>
            <li class="ivm-image-view-model__img-list-item--stacked">
              
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
<!---->          <img width="32" src="https://media.licdn.com/dms/image/v2/D4D03AQF6hrNldRYMXw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1675370350248?e=1755734400&amp;v=beta&amp;t=fUT7malwi21TG7NcCXnpD_PC3HUUVR6EHar2IiceLgc" loading="lazy" height="32" alt="" id="ember408" class="ivm-view-attr__img--centered ivm-view-attr__img--stacked ivm-view-attr__img--stacked-circle-size-1 EntityPhoto-circle-1-stackedFacepile  job-card-container__job-insight-image evi-image lazy-image ember-view">
    </div>
  
            </li>
        </ul>

<!---->    </div>
  
                </div>
                <div class="job-card-container__job-insight-text" dir="ltr">
                  <!---->2 connections work here<!---->
                </div>
            </div>
          
    </div>
  
      
            <ul class="job-card-list__footer-wrapper job-card-container__footer-wrapper flex-shrink-zero display-flex t-sans t-12 t-black--light t-normal t-roman mt1">
<!---->                          <li class="job-card-container__footer-item
                              ">
                            <time datetime="2025-07-04">
                              2 weeks ago
<!---->                            </time>
                          </li>
            </ul>
          <span class="visually-hidden" aria-live="polite">
<!---->          </span>
      </div>
      <div class="job-card-list__actions-container">
          
        
      <div>
          <button aria-label="Dismiss Fullstack Engineer job" id="ember409" class="job-card-container__action job-card-container__action-small artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view" type="button"><!---->
<span class="artdeco-button__text">
    
            <svg role="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="close-small">
<!---->    
    <use href="#close-small" width="16" height="16"></use>
</svg>

            <span class="job-card-container__action-text"></span>
          
</span></button>
      </div>
  
      <!---->  
      </div>
    </div>
  
    </div>
  
                              
        </li>
  
              
        <li id="ember249" class="ember-view   SmCOUmLhQcYHCWzDxjUbFhltcDyHyxQmb occludable-update p0 relative scaffold-layout__list-item" data-occludable-job-id="4261967920">
            
                  
    <div>
      
    <div data-job-id="4261967920" class="display-flex job-card-container relative job-card-list
        job-card-container--clickable
        
        job-card-list--underline-title-on-hover  jobs-search-two-pane__job-card-container--viewport-tracking-18">

      <div>
        <div id="ember410" class="job-card-list__entity-lockup  artdeco-entity-lockup artdeco-entity-lockup--size-4 ember-view">
            <div id="ember411" class="job-card-list__logo  artdeco-entity-lockup__image artdeco-entity-lockup__image--type-square ember-view" type="square">
              
    <div class="ivm-image-view-model    job-card-list__logo-ivm">
        
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
<!---->          <img width="56" src="https://media.licdn.com/dms/image/v2/D4E0BAQEUHHBYkA68Ag/company-logo_100_100/company-logo_100_100/0/1725582343009/jimdo_logo?e=1755734400&amp;v=beta&amp;t=2w1jPJ-XJ8J6xEMvwj-b9oI68n5b88S5uIm2arupVws" loading="lazy" height="56" alt="Jimdo logo" id="ember412" class="ivm-view-attr__img--centered EntityPhoto-square-4   evi-image lazy-image ember-view">
    </div>
  
          </div>
  
            
</div>

          <div id="ember413" class="flex-grow-1 artdeco-entity-lockup__content ember-view">
            <div id="ember414" class="full-width artdeco-entity-lockup__title ember-view">
                  <a data-control-id="Ti/diEJH9K6D3Lng+3Berg==" tabindex="0" href="/jobs/view/4261967920/?eBP=NOT_ELIGIBLE_FOR_CHARGING&amp;refId=KK%2FllKMtw6jdCCmfh0zrAA%3D%3D&amp;trackingId=Ti%2FdiEJH9K6D3Lng%2B3Berg%3D%3D&amp;trk=flagship3_search_srp_jobs" id="ember415" class="disabled ember-view job-card-container__link
                      lAzJmcvyxtGwGiGJaMwYnNFRGLxxWljHaDE
                      job-card-list__title--link" aria-label="Front-End Engineer UX Platform with verification" dir="ltr">
                      <span aria-hidden="true"><strong><!---->Front-End Engineer UX Platform<!----></strong><span class="white-space-pre"> </span><!----><!----><span class="tvm__text tvm__text--low-emphasis"><svg role="none" aria-hidden="true" class="text-view-model__verified-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="verified-small">
<!---->    
    <use href="#verified-small" width="16" height="16"></use>
</svg>
</span></span><span class="visually-hidden"><!---->Front-End Engineer UX Platform with verification<!----></span>
                  </a>
            
</div>
            <div id="ember416" class="artdeco-entity-lockup__subtitle ember-view">
                <span class="DtHZyGNaOYStBKDLZjBlOncsboFqyDqDxY " dir="ltr">
                  <!---->Jimdo<!---->
                </span>

            </div>

            <div id="ember417" class="artdeco-entity-lockup__caption ember-view">
                  <ul class="job-card-container__metadata-wrapper">
                      <li class="dnuFBnNWghFtUEmTHUHXEieLJqAiGtKMwuANkw ">
                        <span dir="ltr">
                          <!---->Germany (Remote)<!---->
                        </span>
                      </li>
<!---->                  </ul>
            </div>

<!---->
<!---->          </div>

        
</div>

            
<!---->      
            <ul class="job-card-list__footer-wrapper job-card-container__footer-wrapper flex-shrink-zero display-flex t-sans t-12 t-black--light t-normal t-roman mt1">
<!---->                          <li class="job-card-container__footer-item
                              ">
                            <time datetime="2025-07-10">
                              1 week ago
<!---->                            </time>
                          </li>
            </ul>
          <span class="visually-hidden" aria-live="polite">
<!---->          </span>
      </div>
      <div class="job-card-list__actions-container">
          
        
      <div>
          <button aria-label="Dismiss Front-End Engineer UX Platform job" id="ember418" class="job-card-container__action job-card-container__action-small artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view" type="button"><!---->
<span class="artdeco-button__text">
    
            <svg role="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="close-small">
<!---->    
    <use href="#close-small" width="16" height="16"></use>
</svg>

            <span class="job-card-container__action-text"></span>
          
</span></button>
      </div>
  
      <!---->  
      </div>
    </div>
  
    </div>
  
                              
        </li>
  
              
        <li id="ember250" class="ember-view   SmCOUmLhQcYHCWzDxjUbFhltcDyHyxQmb occludable-update p0 relative scaffold-layout__list-item" data-occludable-job-id="4267662711">
            
                  
    <div>
      
    <div data-job-id="4267662711" class="display-flex job-card-container relative job-card-list
        job-card-container--clickable
        
        job-card-list--underline-title-on-hover  jobs-search-two-pane__job-card-container--viewport-tracking-19">

      <div>
        <div id="ember419" class="job-card-list__entity-lockup  artdeco-entity-lockup artdeco-entity-lockup--size-4 ember-view">
            <div id="ember420" class="job-card-list__logo  artdeco-entity-lockup__image artdeco-entity-lockup__image--type-square ember-view" type="square">
              
    <div class="ivm-image-view-model    job-card-list__logo-ivm">
        
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
<!---->          <img width="56" src="https://media.licdn.com/dms/image/v2/D4E0BAQFTX32G2axybQ/company-logo_100_100/company-logo_100_100/0/1693468686107/twineis_logo?e=1755734400&amp;v=beta&amp;t=c9of0FZgFmVpfdN7S9UcKB3MNBMzjzDlUL7FR45uCck" loading="lazy" height="56" alt="Twine logo" id="ember421" class="ivm-view-attr__img--centered EntityPhoto-square-4   evi-image lazy-image ember-view">
    </div>
  
          </div>
  
            
</div>

          <div id="ember422" class="flex-grow-1 artdeco-entity-lockup__content ember-view">
            <div id="ember423" class="full-width artdeco-entity-lockup__title ember-view">
                  <a data-control-id="OUxw7xNuIp2LChaMcbb40g==" tabindex="0" href="/jobs/view/4267662711/?eBP=NOT_ELIGIBLE_FOR_CHARGING&amp;refId=KK%2FllKMtw6jdCCmfh0zrAA%3D%3D&amp;trackingId=OUxw7xNuIp2LChaMcbb40g%3D%3D&amp;trk=flagship3_search_srp_jobs" id="ember424" class="disabled ember-view job-card-container__link
                      lAzJmcvyxtGwGiGJaMwYnNFRGLxxWljHaDE
                      job-card-list__title--link" aria-label="Freelance Web Developer with verification" dir="ltr">
                      <span aria-hidden="true"><strong><!---->Freelance Web Developer<!----></strong><span class="white-space-pre"> </span><!----><!----><span class="tvm__text tvm__text--low-emphasis"><svg role="none" aria-hidden="true" class="text-view-model__verified-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="verified-small">
<!---->    
    <use href="#verified-small" width="16" height="16"></use>
</svg>
</span></span><span class="visually-hidden"><!---->Freelance Web Developer with verification<!----></span>
                  </a>
            
</div>
            <div id="ember425" class="artdeco-entity-lockup__subtitle ember-view">
                <span class="DtHZyGNaOYStBKDLZjBlOncsboFqyDqDxY " dir="ltr">
                  <!---->Twine<!---->
                </span>

            </div>

            <div id="ember426" class="artdeco-entity-lockup__caption ember-view">
                  <ul class="job-card-container__metadata-wrapper">
                      <li class="dnuFBnNWghFtUEmTHUHXEieLJqAiGtKMwuANkw ">
                        <span dir="ltr">
                          <!---->European Economic Area (Remote)<!---->
                        </span>
                      </li>
<!---->                  </ul>
            </div>

<!---->
<!---->          </div>

        
</div>

            
<!---->      
            <ul class="job-card-list__footer-wrapper job-card-container__footer-wrapper flex-shrink-zero display-flex t-sans t-12 t-black--light t-normal t-roman mt1">
<!---->                          <li class="job-card-container__footer-item
                              ">
                            <time datetime="2025-07-16">
                              4 days ago
<!---->                            </time>
                          </li>
            </ul>
          <span class="visually-hidden" aria-live="polite">
<!---->          </span>
      </div>
      <div class="job-card-list__actions-container">
          
        
      <div>
          <button aria-label="Dismiss Freelance Web Developer job" id="ember427" class="job-card-container__action job-card-container__action-small artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view" type="button"><!---->
<span class="artdeco-button__text">
    
            <svg role="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="close-small">
<!---->    
    <use href="#close-small" width="16" height="16"></use>
</svg>

            <span class="job-card-container__action-text"></span>
          
</span></button>
      </div>
  
      <!---->  
      </div>
    </div>
  
    </div>
  
                              
        </li>
  
              
        <li id="ember251" class="ember-view   SmCOUmLhQcYHCWzDxjUbFhltcDyHyxQmb occludable-update p0 relative scaffold-layout__list-item" data-occludable-job-id="4264483753">
            
                  
    <div>
      
    <div data-job-id="4264483753" class="display-flex job-card-container relative job-card-list
        job-card-container--clickable
        
        job-card-list--underline-title-on-hover  jobs-search-two-pane__job-card-container--viewport-tracking-20">

      <div>
        <div id="ember428" class="job-card-list__entity-lockup  artdeco-entity-lockup artdeco-entity-lockup--size-4 ember-view">
            <div id="ember429" class="job-card-list__logo  artdeco-entity-lockup__image artdeco-entity-lockup__image--type-square ember-view" type="square">
              
    <div class="ivm-image-view-model    job-card-list__logo-ivm">
        
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
<!---->          <img width="56" src="https://media.licdn.com/dms/image/v2/D4D0BAQHp62tlhd-OLw/company-logo_100_100/company-logo_100_100/0/1708086931828?e=1755734400&amp;v=beta&amp;t=9UH5noxeV6_nx4-oZrzizt3qiLZ744Z2UrepSBQksdc" loading="lazy" height="56" alt="ONVY HealthTech logo" id="ember430" class="ivm-view-attr__img--centered EntityPhoto-square-4   evi-image lazy-image ember-view">
    </div>
  
          </div>
  
            
</div>

          <div id="ember431" class="flex-grow-1 artdeco-entity-lockup__content ember-view">
            <div id="ember432" class="full-width artdeco-entity-lockup__title ember-view">
                  <a data-control-id="gkKCbB+WnGNiFmOci/ACfw==" tabindex="0" href="/jobs/view/4264483753/?eBP=NOT_ELIGIBLE_FOR_CHARGING&amp;refId=KK%2FllKMtw6jdCCmfh0zrAA%3D%3D&amp;trackingId=gkKCbB%2BWnGNiFmOci%2FACfw%3D%3D&amp;trk=flagship3_search_srp_jobs" id="ember433" class="disabled ember-view job-card-container__link
                      lAzJmcvyxtGwGiGJaMwYnNFRGLxxWljHaDE
                      job-card-list__title--link" aria-label="React Native Mobile App Developer" dir="ltr">
                      <span aria-hidden="true"><strong><!---->React Native Mobile App Developer<!----></strong></span><span class="visually-hidden"><!---->React Native Mobile App Developer<!----></span>
                  </a>
            
</div>
            <div id="ember434" class="artdeco-entity-lockup__subtitle ember-view">
                <span class="DtHZyGNaOYStBKDLZjBlOncsboFqyDqDxY " dir="ltr">
                  <!---->ONVY HealthTech<!---->
                </span>

            </div>

            <div id="ember435" class="artdeco-entity-lockup__caption ember-view">
                  <ul class="job-card-container__metadata-wrapper">
                      <li class="dnuFBnNWghFtUEmTHUHXEieLJqAiGtKMwuANkw ">
                        <span dir="ltr">
                          <!---->Germany (Remote)<!---->
                        </span>
                      </li>
<!---->                  </ul>
            </div>

<!---->
<!---->          </div>

        
</div>

            
<!---->      
            <ul class="job-card-list__footer-wrapper job-card-container__footer-wrapper flex-shrink-zero display-flex t-sans t-12 t-black--light t-normal t-roman mt1">
<!---->                          <li class="job-card-container__footer-item
                              ">
                            <time datetime="2025-07-14">
                              5 days ago
<!---->                            </time>
                          </li>
            </ul>
          <span class="visually-hidden" aria-live="polite">
<!---->          </span>
      </div>
      <div class="job-card-list__actions-container">
          
        
      <div>
          <button aria-label="Dismiss React Native Mobile App Developer job" id="ember436" class="job-card-container__action job-card-container__action-small artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view" type="button"><!---->
<span class="artdeco-button__text">
    
            <svg role="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="close-small">
<!---->    
    <use href="#close-small" width="16" height="16"></use>
</svg>

            <span class="job-card-container__action-text"></span>
          
</span></button>
      </div>
  
      <!---->  
      </div>
    </div>
  
    </div>
  
                              
        </li>
  
              
        <li id="ember252" class="ember-view   SmCOUmLhQcYHCWzDxjUbFhltcDyHyxQmb occludable-update p0 relative scaffold-layout__list-item" data-occludable-job-id="4252634252">
            
                  
    <div>
      
    <div data-job-id="4252634252" class="display-flex job-card-container relative job-card-list
        job-card-container--clickable
        
        job-card-list--underline-title-on-hover  jobs-search-two-pane__job-card-container--viewport-tracking-21">

      <div>
        <div id="ember437" class="job-card-list__entity-lockup  artdeco-entity-lockup artdeco-entity-lockup--size-4 ember-view">
            <div id="ember438" class="job-card-list__logo  artdeco-entity-lockup__image artdeco-entity-lockup__image--type-square ember-view" type="square">
              
    <div class="ivm-image-view-model    job-card-list__logo-ivm">
        
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
<!---->          <img width="56" src="https://media.licdn.com/dms/image/v2/D4E0BAQHMUIrCP5XXeA/company-logo_100_100/B4EZb9aL2FHIAQ-/0/1748008222612/zaphosting_logo?e=1755734400&amp;v=beta&amp;t=lFHkNOVyF3XIZrMuOOJqxvUlhnqmSBNsX4dMuwj7G9M" loading="lazy" height="56" alt="ZAP-Hosting logo" id="ember439" class="ivm-view-attr__img--centered EntityPhoto-square-4   evi-image lazy-image ember-view">
    </div>
  
          </div>
  
            
</div>

          <div id="ember440" class="flex-grow-1 artdeco-entity-lockup__content ember-view">
            <div id="ember441" class="full-width artdeco-entity-lockup__title ember-view">
                  <a data-control-id="CgHwGbonnz4YwUs+NL9lLg==" tabindex="0" href="/jobs/view/4252634252/?eBP=NOT_ELIGIBLE_FOR_CHARGING&amp;refId=KK%2FllKMtw6jdCCmfh0zrAA%3D%3D&amp;trackingId=CgHwGbonnz4YwUs%2BNL9lLg%3D%3D&amp;trk=flagship3_search_srp_jobs" id="ember442" class="disabled ember-view job-card-container__link
                      lAzJmcvyxtGwGiGJaMwYnNFRGLxxWljHaDE
                      job-card-list__title--link" aria-label="Frontend-Entwickler (Remote und/oder Vor-Ort)" dir="ltr">
                      <span aria-hidden="true"><strong><!---->Frontend-Entwickler (Remote und/oder Vor-Ort)<!----></strong></span><span class="visually-hidden"><!---->Frontend-Entwickler (Remote und/oder Vor-Ort)<!----></span>
                  </a>
            
</div>
            <div id="ember443" class="artdeco-entity-lockup__subtitle ember-view">
                <span class="DtHZyGNaOYStBKDLZjBlOncsboFqyDqDxY " dir="ltr">
                  <!---->ZAP-Hosting<!---->
                </span>

            </div>

            <div id="ember444" class="artdeco-entity-lockup__caption ember-view">
                  <ul class="job-card-container__metadata-wrapper">
                      <li class="dnuFBnNWghFtUEmTHUHXEieLJqAiGtKMwuANkw ">
                        <span dir="ltr">
                          <!---->Münster, North Rhine-Westphalia, Germany (Hybrid)<!---->
                        </span>
                      </li>
<!---->                  </ul>
            </div>

                <div id="ember445" class="mt1 t-sans t-12 t-black--light t-normal t-roman artdeco-entity-lockup__metadata ember-view">
                  <ul class="job-card-container__metadata-wrapper">
                    <li class="dnuFBnNWghFtUEmTHUHXEieLJqAiGtKMwuANkw">
                      <span dir="ltr">
                        <!---->€35K/yr - €75K/yr<!---->
                      </span>
                    </li>
                  </ul>
                </div>

<!---->          </div>

        
</div>

            
<!---->      
            <ul class="job-card-list__footer-wrapper job-card-container__footer-wrapper flex-shrink-zero display-flex t-sans t-12 t-black--light t-normal t-roman mt1">
<!---->                          <li class="job-card-container__footer-item
                              ">
                            <time datetime="2025-06-22">
                              3 weeks ago
<!---->                            </time>
                          </li>
            </ul>
          <span class="visually-hidden" aria-live="polite">
<!---->          </span>
      </div>
      <div class="job-card-list__actions-container">
          
        
      <div>
          <button aria-label="Dismiss Frontend-Entwickler (Remote und/oder Vor-Ort) job" id="ember446" class="job-card-container__action job-card-container__action-small artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view" type="button"><!---->
<span class="artdeco-button__text">
    
            <svg role="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="close-small">
<!---->    
    <use href="#close-small" width="16" height="16"></use>
</svg>

            <span class="job-card-container__action-text"></span>
          
</span></button>
      </div>
  
      <!---->  
      </div>
    </div>
  
    </div>
  
                              
        </li>
  
              
        <li id="ember253" class="ember-view   SmCOUmLhQcYHCWzDxjUbFhltcDyHyxQmb occludable-update p0 relative scaffold-layout__list-item" data-occludable-job-id="4266951927">
            
                  
    <div>
      
    <div data-job-id="4266951927" class="display-flex job-card-container relative job-card-list
        job-card-container--clickable
        
        job-card-list--underline-title-on-hover  jobs-search-two-pane__job-card-container--viewport-tracking-22">

      <div>
        <div id="ember447" class="job-card-list__entity-lockup  artdeco-entity-lockup artdeco-entity-lockup--size-4 ember-view">
            <div id="ember448" class="job-card-list__logo  artdeco-entity-lockup__image artdeco-entity-lockup__image--type-square ember-view" type="square">
              
    <div class="ivm-image-view-model    job-card-list__logo-ivm">
        
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
<!---->          <img width="56" src="https://media.licdn.com/dms/image/v2/C4E0BAQEyXoKVfTAiww/company-logo_100_100/company-logo_100_100/0/1641850363114/evemo_logo?e=1755734400&amp;v=beta&amp;t=MlUcQqECGJaUJP3QhIzt3hmdURfIBnM6YrAa5EDSKBg" loading="lazy" height="56" alt="evemo logo" id="ember449" class="ivm-view-attr__img--centered EntityPhoto-square-4   evi-image lazy-image ember-view">
    </div>
  
          </div>
  
            
</div>

          <div id="ember450" class="flex-grow-1 artdeco-entity-lockup__content ember-view">
            <div id="ember451" class="full-width artdeco-entity-lockup__title ember-view">
                  <a data-control-id="gcQzGVeip6IE/1nOyHpRkw==" tabindex="0" href="/jobs/view/4266951927/?eBP=NOT_ELIGIBLE_FOR_CHARGING&amp;refId=KK%2FllKMtw6jdCCmfh0zrAA%3D%3D&amp;trackingId=gcQzGVeip6IE%2F1nOyHpRkw%3D%3D&amp;trk=flagship3_search_srp_jobs" id="ember452" class="disabled ember-view job-card-container__link
                      lAzJmcvyxtGwGiGJaMwYnNFRGLxxWljHaDE
                      job-card-list__title--link" aria-label="Software Developer (m/w/d) - Frontend Entwicklung" dir="ltr">
                      <span aria-hidden="true"><strong><!---->Software Developer (m/w/d) - Frontend Entwicklung<!----></strong></span><span class="visually-hidden"><!---->Software Developer (m/w/d) - Frontend Entwicklung<!----></span>
                  </a>
            
</div>
            <div id="ember453" class="artdeco-entity-lockup__subtitle ember-view">
                <span class="DtHZyGNaOYStBKDLZjBlOncsboFqyDqDxY " dir="ltr">
                  <!---->evemo<!---->
                </span>

            </div>

            <div id="ember454" class="artdeco-entity-lockup__caption ember-view">
                  <ul class="job-card-container__metadata-wrapper">
                      <li class="dnuFBnNWghFtUEmTHUHXEieLJqAiGtKMwuANkw ">
                        <span dir="ltr">
                          <!---->Cologne, North Rhine-Westphalia, Germany (Hybrid)<!---->
                        </span>
                      </li>
<!---->                  </ul>
            </div>

<!---->
<!---->          </div>

        
</div>

            
<!---->      
            <ul class="job-card-list__footer-wrapper job-card-container__footer-wrapper flex-shrink-zero display-flex t-sans t-12 t-black--light t-normal t-roman mt1">
<!---->                          <li class="job-card-container__footer-item
                              ">
                            <time datetime="2025-07-17">
                              3 days ago
<!---->                            </time>
                          </li>
            </ul>
          <span class="visually-hidden" aria-live="polite">
<!---->          </span>
      </div>
      <div class="job-card-list__actions-container">
          
        
      <div>
          <button aria-label="Dismiss Software Developer (m/w/d) - Frontend Entwicklung job" id="ember455" class="job-card-container__action job-card-container__action-small artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view" type="button"><!---->
<span class="artdeco-button__text">
    
            <svg role="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="close-small">
<!---->    
    <use href="#close-small" width="16" height="16"></use>
</svg>

            <span class="job-card-container__action-text"></span>
          
</span></button>
      </div>
  
      <!---->  
      </div>
    </div>
  
    </div>
  
                              
        </li>
  
              
        <li id="ember254" class="ember-view   SmCOUmLhQcYHCWzDxjUbFhltcDyHyxQmb occludable-update p0 relative scaffold-layout__list-item" data-occludable-job-id="4267495828">
            
                  
    <div>
      
    <div data-job-id="4267495828" class="display-flex job-card-container relative job-card-list
        job-card-container--clickable
        
        job-card-list--underline-title-on-hover  jobs-search-two-pane__job-card-container--viewport-tracking-23">

      <div>
        <div id="ember456" class="job-card-list__entity-lockup  artdeco-entity-lockup artdeco-entity-lockup--size-4 ember-view">
            <div id="ember457" class="job-card-list__logo  artdeco-entity-lockup__image artdeco-entity-lockup__image--type-square ember-view" type="square">
              
    <div class="ivm-image-view-model    job-card-list__logo-ivm">
        
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
<!---->          <img width="56" src="https://media.licdn.com/dms/image/v2/D560BAQEcCL_eiKAREA/company-logo_100_100/company-logo_100_100/0/1721186064757/bruntworkcareers_logo?e=1755734400&amp;v=beta&amp;t=WMgUTl_fu4Zlgd7639vilA3fkgMG5EgWUt_mPJXKuao" loading="lazy" height="56" alt="BruntWork logo" id="ember458" class="ivm-view-attr__img--centered EntityPhoto-square-4   evi-image lazy-image ember-view">
    </div>
  
          </div>
  
            
</div>

          <div id="ember459" class="flex-grow-1 artdeco-entity-lockup__content ember-view">
            <div id="ember460" class="full-width artdeco-entity-lockup__title ember-view">
                  <a data-control-id="C6uyQdHfdsz0vpG2X8RU+A==" tabindex="0" href="/jobs/view/4267495828/?eBP=NOT_ELIGIBLE_FOR_CHARGING&amp;refId=KK%2FllKMtw6jdCCmfh0zrAA%3D%3D&amp;trackingId=C6uyQdHfdsz0vpG2X8RU%2BA%3D%3D&amp;trk=flagship3_search_srp_jobs" id="ember461" class="disabled ember-view job-card-container__link
                      lAzJmcvyxtGwGiGJaMwYnNFRGLxxWljHaDE
                      job-card-list__title--link" aria-label="Full Stack Developer - FrontEnd, BackEnd &amp; App Development (29617572655) with verification" dir="ltr">
                      <span aria-hidden="true"><strong><!---->Full Stack Developer - FrontEnd, BackEnd &amp; App Development (29617572655)<!----></strong><span class="white-space-pre"> </span><!----><!----><span class="tvm__text tvm__text--low-emphasis"><svg role="none" aria-hidden="true" class="text-view-model__verified-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="verified-small">
<!---->    
    <use href="#verified-small" width="16" height="16"></use>
</svg>
</span></span><span class="visually-hidden"><!---->Full Stack Developer - FrontEnd, BackEnd &amp; App Development (29617572655) with verification<!----></span>
                  </a>
            
</div>
            <div id="ember462" class="artdeco-entity-lockup__subtitle ember-view">
                <span class="DtHZyGNaOYStBKDLZjBlOncsboFqyDqDxY " dir="ltr">
                  <!---->BruntWork<!---->
                </span>

            </div>

            <div id="ember463" class="artdeco-entity-lockup__caption ember-view">
                  <ul class="job-card-container__metadata-wrapper">
                      <li class="dnuFBnNWghFtUEmTHUHXEieLJqAiGtKMwuANkw ">
                        <span dir="ltr">
                          <!---->EMEA (Remote)<!---->
                        </span>
                      </li>
<!---->                  </ul>
            </div>

<!---->
<!---->          </div>

        
</div>

            
<!---->      
            <ul class="job-card-list__footer-wrapper job-card-container__footer-wrapper flex-shrink-zero display-flex t-sans t-12 t-black--light t-normal t-roman mt1">
<!---->                          <li class="job-card-container__footer-item
                              ">
                            <time datetime="2025-07-18">
                              1 day ago
<!---->                            </time>
                          </li>
            </ul>
          <span class="visually-hidden" aria-live="polite">
<!---->          </span>
      </div>
      <div class="job-card-list__actions-container">
          
        
      <div>
          <button aria-label="Dismiss Full Stack Developer - FrontEnd, BackEnd &amp; App Development (29617572655) job" id="ember464" class="job-card-container__action job-card-container__action-small artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view" type="button"><!---->
<span class="artdeco-button__text">
    
            <svg role="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="close-small">
<!---->    
    <use href="#close-small" width="16" height="16"></use>
</svg>

            <span class="job-card-container__action-text"></span>
          
</span></button>
      </div>
  
      <!---->  
      </div>
    </div>
  
    </div>
  
                              
        </li>
  
              
        <li id="ember255" class="ember-view   SmCOUmLhQcYHCWzDxjUbFhltcDyHyxQmb occludable-update p0 relative scaffold-layout__list-item" data-occludable-job-id="4259836338">
            
                  
    <div>
      
    <div data-job-id="4259836338" class="display-flex job-card-container relative job-card-list
        job-card-container--clickable
        
        job-card-list--underline-title-on-hover  jobs-search-two-pane__job-card-container--viewport-tracking-24">

      <div>
        <div id="ember465" class="job-card-list__entity-lockup  artdeco-entity-lockup artdeco-entity-lockup--size-4 ember-view">
            <div id="ember466" class="job-card-list__logo  artdeco-entity-lockup__image artdeco-entity-lockup__image--type-square ember-view" type="square">
              
    <div class="ivm-image-view-model    job-card-list__logo-ivm">
        
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
<!---->          <img width="56" src="https://media.licdn.com/dms/image/v2/D4E0BAQHxlQbBkNIjcg/company-logo_100_100/company-logo_100_100/0/1712819435724/bayerische_versorgungskammer_logo?e=1755734400&amp;v=beta&amp;t=Oa9tOgcEQd2dbSkfGzW3j2jT93rTOn1pWjCvHKsqFHY" loading="lazy" height="56" alt="Bayerische Versorgungskammer logo" id="ember467" class="ivm-view-attr__img--centered EntityPhoto-square-4   evi-image lazy-image ember-view">
    </div>
  
          </div>
  
            
</div>

          <div id="ember468" class="flex-grow-1 artdeco-entity-lockup__content ember-view">
            <div id="ember469" class="full-width artdeco-entity-lockup__title ember-view">
                  <a data-control-id="6YxkB2KhjB1QnTnW2nn+rw==" tabindex="0" href="/jobs/view/4259836338/?eBP=NOT_ELIGIBLE_FOR_CHARGING&amp;refId=KK%2FllKMtw6jdCCmfh0zrAA%3D%3D&amp;trackingId=6YxkB2KhjB1QnTnW2nn%2Brw%3D%3D&amp;trk=flagship3_search_srp_jobs" id="ember470" class="disabled ember-view job-card-container__link
                      lAzJmcvyxtGwGiGJaMwYnNFRGLxxWljHaDE
                      job-card-list__title--link" aria-label="Fullstack Developer – Schwerpunkt Frontend &amp; Design (m/w/d)" dir="ltr">
                      <span aria-hidden="true"><strong><!---->Fullstack Developer – Schwerpunkt Frontend &amp; Design (m/w/d)<!----></strong></span><span class="visually-hidden"><!---->Fullstack Developer – Schwerpunkt Frontend &amp; Design (m/w/d)<!----></span>
                  </a>
            
</div>
            <div id="ember471" class="artdeco-entity-lockup__subtitle ember-view">
                <span class="DtHZyGNaOYStBKDLZjBlOncsboFqyDqDxY " dir="ltr">
                  <!---->Bayerische Versorgungskammer<!---->
                </span>

            </div>

            <div id="ember472" class="artdeco-entity-lockup__caption ember-view">
                  <ul class="job-card-container__metadata-wrapper">
                      <li class="dnuFBnNWghFtUEmTHUHXEieLJqAiGtKMwuANkw ">
                        <span dir="ltr">
                          <!---->Munich, Bavaria, Germany (Remote)<!---->
                        </span>
                      </li>
<!---->                  </ul>
            </div>

<!---->
<!---->          </div>

        
</div>

            
<!---->      
            <ul class="job-card-list__footer-wrapper job-card-container__footer-wrapper flex-shrink-zero display-flex t-sans t-12 t-black--light t-normal t-roman mt1">
<!---->                          <li class="job-card-container__footer-item
                              ">
                            <time datetime="2025-07-07">
                              1 week ago
<!---->                            </time>
                          </li>
            </ul>
          <span class="visually-hidden" aria-live="polite">
<!---->          </span>
      </div>
      <div class="job-card-list__actions-container">
          
        
      <div>
          <button aria-label="Dismiss Fullstack Developer – Schwerpunkt Frontend &amp; Design (m/w/d) job" id="ember473" class="job-card-container__action job-card-container__action-small artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view" type="button"><!---->
<span class="artdeco-button__text">
    
            <svg role="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="close-small">
<!---->    
    <use href="#close-small" width="16" height="16"></use>
</svg>

            <span class="job-card-container__action-text"></span>
          
</span></button>
      </div>
  
      <!---->  
      </div>
    </div>
  
    </div>
  
                              
        </li>
  
          
</ul>
<!---->        <div id="jobs-search-results-footer">
          
      <!---->
      <!---->
      
  
        
        <div id="ember135" class="ember-view   ">
            
          
    
        
<!---->    
        
  
        
        </div>
  
      

    
<!----><!---->              
    <div class="jobs-search-pagination jobs-search-results-list__pagination p4">
        <button aria-label="View previous page" id="ember136" class="artdeco-button artdeco-button--muted artdeco-button--1 artdeco-button--tertiary ember-view jobs-search-pagination__button jobs-search-pagination__button--previous" type="button">        <svg role="none" aria-hidden="true" class="artdeco-button__icon " xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="chevron-left-small" data-rtl="true">
<!---->    
    <use href="#chevron-left-small" width="16" height="16"></use>
</svg>


<span class="artdeco-button__text">
    Previous
</span></button>

      <ul class="jobs-search-pagination__pages">
          <li class="jobs-search-pagination__indicator">
            <button class="jobs-search-pagination__indicator-button" aria-label="Page 1" type="button">
              <span>1</span>
            </button>
          </li>
          <li class="jobs-search-pagination__indicator">
            <button class="jobs-search-pagination__indicator-button" aria-label="Page 4" type="button">
              <span>…</span>
            </button>
          </li>
            <li class="jobs-search-pagination__indicator">
              <button class="jobs-search-pagination__indicator-button " aria-label="Page 5" type="button">
                <span>5</span>
              </button>
            </li>
            <li class="jobs-search-pagination__indicator">
              <button class="jobs-search-pagination__indicator-button jobs-search-pagination__indicator-button--active" aria-current="page" aria-label="Page 6" type="button">
                <span>6</span>
              </button>
            </li>
            <li class="jobs-search-pagination__indicator">
              <button class="jobs-search-pagination__indicator-button " aria-label="Page 7" type="button">
                <span>7</span>
              </button>
            </li>
          <li class="jobs-search-pagination__indicator">
            <button class="jobs-search-pagination__indicator-button" aria-label="Page 8" type="button">
              <span>…</span>
            </button>
          </li>
      </ul>
      <p class="jobs-search-pagination__page-state">
        Page 6 of 40
      </p>

        <button aria-label="View next page" id="ember256" class="artdeco-button artdeco-button--muted artdeco-button--icon-right artdeco-button--1 artdeco-button--tertiary ember-view jobs-search-pagination__button jobs-search-pagination__button--next" type="button">        <svg role="none" aria-hidden="true" class="artdeco-button__icon " xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="chevron-right-small" data-rtl="true">
<!---->    
    <use href="#chevron-right-small" width="16" height="16"></use>
</svg>


<span class="artdeco-button__text">
    Next
</span></button>
    </div>
  
<!---->            
    <footer class="global-footer-compact
        " aria-label="LinkedIn Footer Content">
      
        <div id="ember137" class="ember-view   ">
            
<!---->        <ul class="global-footer-compact__content global-footer-compact__links">
            <li class="global-footer-compact__item">
                <a tabindex="0" target="_blank" href="https://about.linkedin.com/" id="compactfooter-about" class="ember-view global-footer__link t-12 t-normal">
                  <span>
                    About
                  </span>
                </a>
            </li>
            <li class="global-footer-compact__item">
                <a tabindex="0" target="_blank" href="https://www.linkedin.com/accessibility" id="compactfooter-accessibility" class="ember-view global-footer__link t-12 t-normal">
                  <span>
                    Accessibility
                  </span>
                </a>
            </li>
            <li class="global-footer-compact__item">
                <a tabindex="0" target="_blank" href="https://www.linkedin.com/help/linkedin?trk=footer_d_flagship3_search_srp_jobs" id="compactfooter-help" class="ember-view global-footer__link t-12 t-normal">
                  <span data-dyn-trk="">
                    Help Center
                  </span>
                </a>
            </li>
            <li class="global-footer-compact__item">
                
    
    
    <div id="ember478" class="artdeco-dropdown artdeco-dropdown--placement-top artdeco-dropdown--justification-left ember-view global-footer-dropdown">
      <button aria-expanded="false" id="compactfooter-privacy_dropdown-trigger" class="artdeco-dropdown__trigger artdeco-dropdown__trigger--placement-top ember-view global-footer-dropdown__trigger" type="button" tabindex="0">
        <span class="global-footer__link global-footer__dropdown-trigger t-12 t-normal">
          <span class="text-align-left">
            Privacy &amp; Terms
            <svg role="none" aria-hidden="true" class="global-footer-dropdown__trigger-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="caret-small">
<!---->    
    <use href="#caret-small" width="16" height="16"></use>
</svg>

          </span>
        </span>
      
<!----></button>
      <div tabindex="-1" aria-hidden="true" id="ember480" class="artdeco-dropdown__content artdeco-dropdown--is-dropdown-element artdeco-dropdown__content--justification-left artdeco-dropdown__content--placement-top ember-view global-footer-dropdown__options"><!----></div>
    </div>
  
  
            </li>
            <li class="global-footer-compact__item">
                <a tabindex="0" target="_blank" href="https://www.linkedin.com/help/linkedin/answer/62931" id="compactfooter-ad_choices" class="ember-view global-footer__link t-12 t-normal">
                  <span>
                    Ad Choices
                  </span>
                </a>
            </li>
            <li class="global-footer-compact__item">
                <a tabindex="0" target="_blank" href="https://www.linkedin.com/ad/start?trk=n_nav_ads_rr" id="compactfooter-advertising" class="ember-view global-footer__link t-12 t-normal">
                  <span>
                    Advertising
                  </span>
                </a>
            </li>
            <li class="global-footer-compact__item">
                
    
    
    <div id="ember483" class="artdeco-dropdown artdeco-dropdown--placement-top artdeco-dropdown--justification-left ember-view global-footer-dropdown">
      <button aria-expanded="false" id="compactfooter-business_services_dropdown-trigger" class="artdeco-dropdown__trigger artdeco-dropdown__trigger--placement-top ember-view global-footer-dropdown__trigger" type="button" tabindex="0">
        <span class="global-footer__link global-footer__dropdown-trigger t-12 t-normal">
          <span class="text-align-left">
            Business Services
            <svg role="none" aria-hidden="true" class="global-footer-dropdown__trigger-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="caret-small">
<!---->    
    <use href="#caret-small" width="16" height="16"></use>
</svg>

          </span>
        </span>
      
<!----></button>
      <div tabindex="-1" aria-hidden="true" id="ember485" class="artdeco-dropdown__content artdeco-dropdown--is-dropdown-element artdeco-dropdown__content--justification-left artdeco-dropdown__content--placement-top ember-view global-footer-dropdown__options"><!----></div>
    </div>
  
  
            </li>
            <li class="global-footer-compact__item">
                
  <div>
    
    <div>
      <div id="ember486" class="ember-view"><!----></div>

      
  <button id="compactfooter-get_app_footer" class="global-footer__link global-footer__dropdown-trigger t-12 t-normal" type="button">
    Get the LinkedIn app
  </button>

    </div>
  
  </div>

            </li>
            <li class="global-footer-compact__item">
                <button id="compactfooter-more" class="global-footer__link t-12 t-normal" aria-label="More options" type="button">
                  More
                </button>
            </li>
        </ul>
          <div class="global-footer-compact__content t-12 t-normal text-align-center clear-both" id="compactfooter-copyright">
            <svg role="img" aria-hidden="false" aria-label="LinkedIn" class="global-footer-compact__linkedin-logo" xmlns="http://www.w3.org/2000/svg" width="56" height="14" viewBox="0 0 56 14" data-supported-dps="56x14" data-test-icon="linkedin-logo-blue-xxsmall">
<!---->    <svg display="var(--hue-web-svg-display-light)">
      <image href="https://static.licdn.com/aero-v1/sc/h/aahlc8ivbnmk0t3eyz8as5gvr" x="0" y="0" width="56" height="14"></image>
    </svg>
    <svg display="var(--hue-web-svg-display-dark)">
      <image href="https://static.licdn.com/aero-v1/sc/h/34bl5fp6gi8t0nscavw94xa7x" x="0" y="0" width="56" height="14"></image>
    </svg>
</svg>


            LinkedIn Corporation © 2025
          </div>

        <div id="ember474" class="ember-view"><!----></div>
      
        </div>
  
    </footer>
  
        </div>
      </div>
  
  
            
        </div>

        <div class="scaffold-layout__detail
            overflow-x-hidden jobs-search__job-details
            
            " tabindex="-1">
          
              
    <!---->
    <div class="jobs-search__job-details--wrapper">
      <div></div>

        
      <div aria-label="Web Frontend Developer (w/*/m)" class="jobs-search__job-details--container
          " data-job-details-events-trigger="">
        
      <div class="jobs-semantic-search-job-details-wrapper" tabindex="0">
        <div></div>
        
<!---->
    <div class="job-view-layout jobs-details">
      <div>
        <div class="jobs-details__main-content jobs-details__main-content--single-pane full-width
            ">
            

<!---->  
          
          <div>
            
    <div class="t-14" tabindex="-1">
<!---->      <div class="relative
          job-details-jobs-unified-top-card__container--two-pane">
        <div>
          <div class="display-flex align-items-center">
            <div class="display-flex align-items-center flex-1">
                <a class="LmfeiLKoocWbXCNApouwKExPrfRknwNE " aria-label="devbite logo" href="https://www.linkedin.com/company/devbite/life" data-test-app-aware-link="">
                    
    <div class="ivm-image-view-model   ">
        
    <div class="ivm-view-attr__img-wrapper
        
        ">
<!---->
<!---->          <img width="32" src="https://media.licdn.com/dms/image/v2/C4D0BAQHM3ckZspX09g/company-logo_100_100/company-logo_100_100/0/1630579823094/devbite_logo?e=1755734400&amp;v=beta&amp;t=8kZPwR5pLP8fjxAc_MzXJlVm_d0Q8U0JN-VemB2KACc" loading="lazy" height="32" alt="devbite logo" id="ember48" class="ivm-view-attr__img--centered EntityPhoto-square-1   evi-image lazy-image ember-view">
    </div>
  
          </div>
  
                </a>

                <div class="job-details-jobs-unified-top-card__company-name" dir="ltr">
                  <a class="LmfeiLKoocWbXCNApouwKExPrfRknwNE " target="_self" tabindex="0" href="https://www.linkedin.com/company/devbite/life" data-test-app-aware-link=""><!---->devbite<!----></a>
                </div>
            </div>

            <div class="job-details-jobs-unified-top-card__top-buttons">
                
    <div class="social-share">
      <div id="ember49" class="artdeco-dropdown artdeco-dropdown--placement-bottom artdeco-dropdown--justification-right ember-view">
          <button aria-expanded="false" aria-label="Share" id="ember50" class="social-share__dropdown-trigger artdeco-button artdeco-button--3 artdeco-button--tertiary artdeco-button--circle artdeco-button--muted artdeco-dropdown__trigger artdeco-dropdown__trigger--placement-bottom ember-view" type="button" tabindex="0">
            <svg role="none" aria-hidden="true" class="artdeco-button__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-supported-dps="24x24" data-test-icon="share-linkedin-medium" data-rtl="true">
<!---->    
    <use href="#share-linkedin-medium" width="24" height="24"></use>
</svg>

            <span class="artdeco-button__text">Share</span>
          
<!----></button>

        <div tabindex="-1" aria-hidden="true" id="ember51" class="social-share__content text-align-left artdeco-dropdown__content artdeco-dropdown--is-dropdown-element artdeco-dropdown__content--has-arrow artdeco-dropdown__content--arrow-right artdeco-dropdown__content--justification-right artdeco-dropdown__content--placement-bottom ember-view"><!----></div>
      </div>

      <div>
  
      
<!---->  
  
</div>

<!---->

<!---->    </div>
  
                
    <div id="ember52" class="artdeco-dropdown jobs-options artdeco-dropdown--placement-bottom artdeco-dropdown--justification-right ember-view">
      
                  <button aria-expanded="false" id="ember53" class="artdeco-button artdeco-button--3 artdeco-button--tertiary artdeco-button--muted artdeco-button--circle artdeco-dropdown__trigger artdeco-dropdown__trigger--placement-bottom ember-view" type="button" tabindex="0">
                    <svg role="none" aria-hidden="true" class="artdeco-button__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-supported-dps="24x24" data-test-icon="overflow-web-ios-medium">
<!---->    
    <use href="#overflow-web-ios-medium" width="24" height="24"></use>
</svg>

                    <span class="artdeco-button__text">
                      Show more options
                    </span>
                  
<!----></button>
                
      <div tabindex="-1" aria-hidden="true" id="ember54" class="artdeco-dropdown__content artdeco-dropdown--is-dropdown-element artdeco-dropdown__content--has-arrow artdeco-dropdown__content--arrow-right artdeco-dropdown__content--justification-right artdeco-dropdown__content--placement-bottom ember-view"><!----></div>
    </div>
  
            </div>
          </div>

          <div class="display-flex justify-space-between flex-wrap mt2">
            <div class="t-24 job-details-jobs-unified-top-card__job-title">
              <h1 class="t-24 t-bold inline"><a href="/jobs/view/4252658334/?alternateChannel=search&amp;eBP=NOT_ELIGIBLE_FOR_CHARGING&amp;refId=KK%2FllKMtw6jdCCmfh0zrAA%3D%3D&amp;trackingId=xCjASafQzfSddeMyr3kVAw%3D%3D&amp;trk=d_flagship3_search_srp_jobs" id="ember55" class="ember-view">Web Frontend Developer (w/*/m)</a></h1><!----></div>

<!---->          </div>

<!---->
          <div class="job-details-jobs-unified-top-card__primary-description-container">
              <div class="t-black--light mt2 job-details-jobs-unified-top-card__tertiary-description-container">
                <span dir="ltr"><span class="tvm__text tvm__text--low-emphasis"><!---->Dresden, Saxony, Germany<!----></span><span class="tvm__text tvm__text--low-emphasis"><span class="white-space-pre"> </span>·<span class="white-space-pre"> </span></span><span class="tvm__text tvm__text--low-emphasis"><span><!---->3 weeks ago<!----></span></span><span class="tvm__text tvm__text--low-emphasis"><span class="white-space-pre"> </span>·<span class="white-space-pre"> </span></span><span class="tvm__text tvm__text--low-emphasis"><!---->Over 100 people clicked apply<!----></span><p><span class="tvm__text tvm__text--low-emphasis"><!---->Responses managed off LinkedIn<!----></span></p></span>
              </div>
          </div>

<!---->
            
      <div class="job-details-fit-level-preferences">
            <button tabindex="0" class="artdeco-button artdeco-button--secondary artdeco-button--muted" type="button">
              <span class="tvm__text tvm__text--low-emphasis"><strong><!---->€3,000/month - €3,500/month<!----></strong></span>
            </button>
            <button tabindex="0" class="artdeco-button artdeco-button--secondary artdeco-button--muted" type="button">
              <span aria-hidden="true"><span class="tvm__text tvm__text--low-emphasis"><strong><li-icon aria-hidden="true" type="check" class="v-align-bottom" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
      <path d="M12.57 2H15L6 15l-5-5 1.41-1.41 3.31 3.3z"></path>
    </svg></li-icon><span class="white-space-pre"> </span>On-site<!----></strong></span></span><span class="visually-hidden"><!---->Matches your job preferences, workplace type is On-site.<!----></span>
            </button>
            <button tabindex="0" class="artdeco-button artdeco-button--secondary artdeco-button--muted" type="button">
              <span aria-hidden="true"><span class="tvm__text tvm__text--low-emphasis"><strong><li-icon aria-hidden="true" type="check" class="v-align-bottom" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
      <path d="M12.57 2H15L6 15l-5-5 1.41-1.41 3.31 3.3z"></path>
    </svg></li-icon><span class="white-space-pre"> </span>Full-time<!----></strong></span></span><span class="visually-hidden"><!---->Matches your job preferences, job type is Full-time.<!----></span>
            </button>
      </div>
      
    <div id="ember56" class="ember-view"><!----></div>
  
  

          <div class="mt4">
              <div class="display-flex">
                  
    <div class="jobs-s-apply jobs-s-apply--fadein inline-flex mr2">
        
    <div class="jobs-apply-button--top-card">
      <button role="link" aria-label="Apply to Web Frontend Developer (w/*/m) on company website" id="jobs-apply-button-id" class="jobs-apply-button
         artdeco-button artdeco-button--icon-right artdeco-button--3 artdeco-button--primary ember-view" data-live-test-job-apply-button="">        <svg role="none" aria-hidden="true" class="artdeco-button__icon " xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="link-external-small">
<!---->    
    <use href="#link-external-small" width="16" height="16"></use>
</svg>


<span class="artdeco-button__text">
    Apply
</span></button>
    </div>
  
    </div>
  

                  <span class="visibility-hidden"></span>

                    
    <button class="jobs-save-button
         artdeco-button artdeco-button--secondary artdeco-button--3" type="button">
        <span aria-hidden="true" class="jobs-save-button__text">
          Save
        </span>
        <span class="a11y-text">
          Save Web Frontend Developer (w/*/m) at devbite
        </span>
    </button>
  
              </div>

<!---->
<!---->
<!----><!---->          </div>

<!---->
<!---->
<!----><!---->
<!---->        </div>

<!---->
<!---->      </div>
        <div class="job-details-jobs-unified-top-card__sticky-header
            job-details-jobs-unified-top-card__sticky-header--disabled">
          <div class="job-details-jobs-unified-top-card__title-container">
              <a data-control-id="xCjASafQzfSddeMyr3kVAw==" href="/jobs/view/4252658334/?alternateChannel=search&amp;refId=KK%2FllKMtw6jdCCmfh0zrAA%3D%3D&amp;trackingId=xCjASafQzfSddeMyr3kVAw%3D%3D&amp;trk=d_flagship3_search_srp_jobs" id="ember58" class="ember-view">
                <h2 class="t-16 t-black t-bold truncate">
                  Web Frontend Developer (w/*/m)
                </h2>
              </a>
            <div class="t-14 truncate">
              devbite · Dresden, Saxony, Germany (On-site)
            </div>
          </div>
          <div class="job-details-jobs-unified-top-card__sticky-buttons-container">
              
    <div class="jobs-s-apply jobs-s-apply--fadein inline-flex mr2">
        
    <div class="jobs-apply-button--top-card">
      <button role="link" aria-label="Apply to Web Frontend Developer (w/*/m) on company website" id="jobs-apply-button-id" class="jobs-apply-button
         artdeco-button artdeco-button--icon-right artdeco-button--2 artdeco-button--primary ember-view" data-live-test-job-apply-button="">        <svg role="none" aria-hidden="true" class="artdeco-button__icon " xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="link-external-small">
<!---->    
    <use href="#link-external-small" width="16" height="16"></use>
</svg>


<span class="artdeco-button__text">
    Apply
</span></button>
    </div>
  
    </div>
  

                
    <button class="jobs-save-button
         mr2 artdeco-button artdeco-button--2 artdeco-button--secondary" aria-expanded="false" type="button">
        <span aria-hidden="true" class="jobs-save-button__text">
          Save
        </span>
        <span class="a11y-text">
          Save Web Frontend Developer (w/*/m) at devbite
        </span>
    </button>
  

            
    <div id="ember60" class="artdeco-dropdown jobs-options artdeco-dropdown--placement-bottom artdeco-dropdown--justification-right ember-view inline-flex">
      
              <button aria-expanded="false" id="ember61" class="artdeco-button artdeco-button--2 artdeco-button--tertiary artdeco-button--muted artdeco-button--circle artdeco-dropdown__trigger artdeco-dropdown__trigger--placement-bottom ember-view" type="button" tabindex="0">
                <svg role="none" aria-hidden="true" class="artdeco-button__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-supported-dps="24x24" data-test-icon="overflow-web-ios-medium">
<!---->    
    <use href="#overflow-web-ios-medium" width="24" height="24"></use>
</svg>

                <span class="artdeco-button__text">
                  Show more options
                </span>
              
<!----></button>
            
      <div tabindex="-1" aria-hidden="true" id="ember62" class="artdeco-dropdown__content artdeco-dropdown--is-dropdown-element artdeco-dropdown__content--has-arrow artdeco-dropdown__content--arrow-right artdeco-dropdown__content--justification-right artdeco-dropdown__content--placement-bottom ember-view"><!----></div>
    </div>
  
          </div>
        </div>
    </div>
  
<!---->
<!---->          </div>

          
<!---->      <div class="artdeco-card mt4 job-details-module relative">
          <div class="job-details-fit-level-card
              pv4 ph5
              cursor-pointer" role="button">
<!---->              <div class="display-flex flex-row justify-space-between">
                <div class="display-flex flex-column
                    align-items-flex-start">
                  <div class="display-flex flex-row justify-space-between">
                      <div class="display-flex flex-column mr3">
                          <h2 class="text-heading-large mb1" dir="ltr">
                            <strong><!---->Your profile<span class="white-space-pre"> </span><span class="tvm__text tvm__text--positive"><!---->matches several<!----></span><span class="white-space-pre"> </span>required qualifications<!----></strong>
                          </h2>
<!---->                      </div>

<!---->                  </div>

<!---->
                    <div class="mt2">
                      <button id="ember293" class="coach-shared-hscroll-button__action artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--secondary ember-view">        <svg role="none" aria-hidden="true" class="artdeco-button__icon " xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="signal-ai-small">
<!---->    
    <use href="#signal-ai-small" width="16" height="16"></use>
</svg>


<span class="artdeco-button__text">
    Show match details
</span></button>
                    </div>
                  
<!---->                </div>
                  <div class="job-details-fit-level-card__entities">
                    <img src="https://media.licdn.com/dms/image/v2/C4D0BAQHM3ckZspX09g/company-logo_100_100/company-logo_100_100/0/1630579823094/devbite_logo?e=1755734400&amp;v=beta&amp;t=8kZPwR5pLP8fjxAc_MzXJlVm_d0Q8U0JN-VemB2KACc" loading="lazy" id="ember294" class="evi-image lazy-image ember-view job-details-fit-level-card__company-entity">
                    <img src="https://media.licdn.com/dms/image/v2/D4E03AQE4O76bl58vDQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1732454561859?e=1755734400&amp;v=beta&amp;t=DIVfGVZ05TvEXyH_E0jzIZRGAFC9CkyPPIjYLdEeoaQ" loading="lazy" id="ember295" class="evi-image lazy-image ember-view job-details-fit-level-card__profile-entity">
                  </div>
              </div>
          </div>
          
      <div class="job-details-fit-level-card-feedback__container">

        <div class="display-flex">
          <p class="job-details-fit-level-card-feedback__insight t-12 t-black--light">BETA</p><p class="t-12 t-black--light pl1">Is this information helpful?</p>
        </div>
        <div class="display-flex flex-direction-row">
          <span tabindex="-1" id="ember296" class="artdeco-hoverable-trigger artdeco-hoverable-trigger--content-placed-top artdeco-hoverable-trigger--is-hoverable ember-view">
            <button aria-label="Mark information as helpful" aria-describedby="artdeco-hoverable-artdeco-gen-49" id="ember297" class="artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--1 artdeco-button--tertiary ember-view mr1 job-details-fit-level-card-feedback__feedback-button">        <svg role="none" aria-hidden="true" class="artdeco-button__icon " xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="thumbs-up-outline-small">
<!---->    
    <use href="#thumbs-up-outline-small" width="16" height="16"></use>
</svg>


<span class="artdeco-button__text">
    
</span></button>
            <div id="artdeco-gen-49" class="ember-view"><div id="ember299" class="ember-view"></div></div>
          </span>
          <span tabindex="-1" id="ember300" class="artdeco-hoverable-trigger artdeco-hoverable-trigger--content-placed-top artdeco-hoverable-trigger--is-hoverable ember-view">
            <button aria-label="Mark information as not helpful" aria-describedby="artdeco-hoverable-artdeco-gen-50" id="ember301" class="artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--1 artdeco-button--tertiary ember-view mr1 job-details-fit-level-card-feedback__feedback-button">        <svg role="none" aria-hidden="true" class="artdeco-button__icon " xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="thumbs-down-outline-small">
<!---->    
    <use href="#thumbs-down-outline-small" width="16" height="16"></use>
</svg>


<span class="artdeco-button__text">
    
</span></button>
            <div id="artdeco-gen-50" class="ember-view"><div id="ember303" class="ember-view"></div></div>
          </span>
        </div>
      </div>

      <div id="ember304" class="ember-view"><!----></div>
  
      </div>
  

            
<!---->  

            
    <div class="hidden job-details-module relative">
<!---->
<!---->
<!---->
<!---->
<!---->          </div>
  

<!---->
<!---->
<!---->
          
    <div class="job-details-module">
<!----><!---->          </div>
  

<!---->
            
    <div class="jobs-box--fadein jobs-box--full-width jobs-box--with-cta-large jobs-description
        
        
        
         jobs-description--reformatted
        
         job-details-module">

<!---->
      <article class="jobs-description__container
          ">
        <div class="jobs-description__content jobs-description-content
            ">
          <div class="jobs-box__html-content
              qdJazsnSuNXVyUyiZIIsyuIHzTlKXQtCKsmiU
              t-14 t-normal
              jobs-description-content__text--stretch" id="job-details" tabindex="-1">
            <h2 class="text-heading-large">
              About the job
            </h2>

<!---->            <div class="mt4">
                <p dir="ltr">
                  <span><p><!---->Gemeinsam mit Dir wollen wir moderne Web-Apps und coole Frontends schaffen!<!----></p></span><span><br></span><span><p><!---->Im Team entwirfst Du clevere Konzepte und leistungsstarke Lösungen. Du hast den Anspruch, unsere Kunden und vor allem die Nutzerinnen und Nutzer im Web zu begeistern. Du scheust Dich nicht vor neuen Technologien und Herausforderungen, sondern gehst gern auch neue Wege.<!----></p></span><span><br></span><!---->Aufgaben<!----><span><br></span><span>      <ul><span><br></span><li><!---->Konzeption und Umsetzung anspruchsvoller Webclient-Anwendungen für Individualsoftware auf Basis von z.B. React.js oder Vue.js<!----></li><span><br></span><li><!---->Integration von Schnittstellen / APIs in bestehende Systeme<!----></li><span><br></span><li><!---->Konzeption und Entwicklung von kundenspezifischen Website-Projekten &amp; Apps<!----></li><span><br></span><li><!---->Qualitätssicherung der Ergebnisse durch automatisierte Modul- und Oberflächentests sowie regelmäßige Code Reviews<!----></li><span><br></span></ul>
</span><span><br></span><!---->Qualifikation<!----><span><br></span><span>      <ul><span><br></span><li><!---->Du bringst hierfür eine passende akademische oder nicht-akademische IT-Ausbildung mit<!----></li><span><br></span><li><!---->Kenntnisse in den Bereichen HTML/HTML5, CSS und JavaScript<!----></li><span><br></span><li><!---->Erfahrung mit JavaScript Frameworks (React.js, Vue.js) wünschenswert<!----></li><span><br></span><li><!---->Erfahrung mit PHP wünschenswert<!----></li><span><br></span><li><!---->praktische Erfahrung mit Dev-Ops (Git, Docker, Vagrant) wünschenswert<!----></li><span><br></span><li><!---->Erfahrungen mit CSS Frameworks (Bootstrap, Material Design) optional<!----></li><span><br></span><li><!---->Spaß am Explorieren von neuen Technologien und Frameworks<!----></li><span><br></span><li><!---->Teamgeist und Lernfähigkeit<!----></li><span><br></span></ul>
</span><span><br></span><!---->Benefits<!----><span><br></span><span>      <ul><span><br></span><li><!---->ein junges &amp; dynamisches Team, flache Hierarchien<!----></li><span><br></span><li><!---->eigene devbite-Kreditkarte mit monatlichem Bonus<!----></li><span><br></span><li><!---->Obst- / Gemüse- &amp; Kaffee-Flatrate<!----></li><span><br></span><li><!---->Flexible Arbeitszeiten (Gleitzeit, 4-Tage Woche ... alles möglich)<!----></li><span><br></span><li><!---->Moderne Technologien (Bleibe fit mit Meetups &amp; Konferenzen)<!----></li><span><br></span><li><!---->Zentrale Lage (Gut erreichbar und viele Mittags-Optionen)<!----></li><span><br></span></ul>
</span><span><br></span><span><p><!---->Bewirb dich jetzt ganz unverbindlich!<!----><span><br></span><!---->Wir freuen uns auf ein Kennenlernen.<!----></p></span>
                </p>
<!---->            </div>
          </div>
          <div class="jobs-description__details">
<!---->          </div>
        </div>
      </article>
<!---->    </div>
  

<!---->
<!---->
<!---->
            <div id="SALARY" class="jobs-details__salary-main-rail-card">
<!----><!---->            </div>

                    

    <div class="job-details-how-you-match-card__container mb4
        
         job-details-module" id="how-you-match-card-container">
<!---->
<!---->
<!---->
<!---->    </div>
  

<!---->
              
    <div class="job-details-module">
        
    <div class="jobs-premium-applicant-insights artdeco-card premium-accent-bar
         ">
      <div class="display-flex justify-space-between">
        <div class="display-flex align-items-center">
          <svg role="img" aria-hidden="false" aria-label="Premium" xmlns="http://www.w3.org/2000/svg" width="78" height="8" viewBox="0 0 78 8" data-supported-dps="78x8" data-test-icon="premium-badge-xxxsmall">
<!---->    <svg display="var(--hue-web-svg-display-light)">
      <image href="https://static.licdn.com/aero-v1/sc/h/3068z204ww5pg0wt1qbemtzul" x="0" y="0" width="78" height="8"></image>
    </svg>
    <svg display="var(--hue-web-svg-display-dark)">
      <image href="https://static.licdn.com/aero-v1/sc/h/181jrk4wmnppkt9vl21cauxpa" x="0" y="0" width="78" height="8"></image>
    </svg>
</svg>

        </div>
        <div id="applicant-insights-container-outlet" class="jobs-premium-applicant-insights__tooltip-outlet">  <div id="artdeco-hoverable-artdeco-gen-46" class="artdeco-hoverable-content jobs-premium-branding__hovercard artdeco-hoverable-content--inverse-theme artdeco-hoverable-content--open-spacing artdeco-hoverable-content--undefined-placement" tabindex="-1" role="tooltip" aria-hidden="true">
    <div class="artdeco-hoverable-content__shell">
        <button class="artdeco-hoverable-content__close-btn" aria-label="Dismiss" type="button">
          <li-icon aria-hidden="true" type="cancel-icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
      <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
    </svg></li-icon>
        </button>
      <div class="artdeco-hoverable-content__content">
        
            <p class="t-16 t-black t-bold">Insights about this job’s applicants</p><p class="t-14 t-black--light t-normal">Here’s where you can see if this job is a good fit for you by learning how you stack up against other applicants, what your unique advantages are, and how your skills and background help you stand out from the crowd.</p><a href="/help/linkedin/answer/45159" data-control-name="premium_jobdetails_applicant_insights_learn_more" target="_blank" id="applicant-insights-learn-more-link" class="link" aria-label="Learn more about premium insights related to job applicants and hiring companies">Learn more</a>
          
      </div>
    </div>
    <div class="artdeco-hoverable-content__arrow" aria-hidden="true"></div>
  </div>
</div>
        <span tabindex="-1" id="ember257" class="artdeco-hoverable-trigger artdeco-hoverable-trigger--content-placed-bottom ember-view">
          <button aria-controls="artdeco-hoverable-artdeco-gen-46" aria-expanded="false" aria-label="Learn more about applicant insights" type="button">
            <svg role="none" aria-hidden="true" class="jobs-details-premium-insight__tooltip-pebble" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="question-small" data-rtl="true" data-rtl-ignore="iw">
<!---->    
    <use href="#question-small" width="16" height="16"></use>
</svg>

          </button>
          <div id="artdeco-gen-46" class="ember-view"><div id="ember259" class="ember-view"></div></div>
        </span>
      </div>
        <h2 class="jobs-box__title text-heading-large t-sans t-black">
              See how you compare to others who clicked apply
        </h2>
        <div class="jobs-premium-applicant-insights__row-container" data-view-name="premium-job-applicant-insights">
          
    <div class="jobs-details-premium-insight jobs-details-premium-insight--row jobs-details-premium-insight--left-column applicant-rank">
        <h3 class="jobs-details-premium-insight__title">
              Candidates who clicked apply
        </h3>
        <ul class="jobs-details-premium-insight__list jobs-premium-applicant-insights__list">
          <li class="jobs-premium-applicant-insights__list-item">
                <span class="jobs-premium-applicant-insights__list-num t-18 t-bold pr2">179</span><span class="jobs-premium-applicant-insights__list-description t-14 t-normal"> total</span>
          </li>
          <li class="jobs-premium-applicant-insights__list-item">
                <span class="jobs-premium-applicant-insights__list-num t-18 t-bold pr2">1</span><span class="jobs-premium-applicant-insights__list-description t-14 t-normal"> in the past day</span>
          </li>
        </ul>
    </div>
  
<!---->        </div>

          <div class="jobs-premium-applicant-insights__row-container flex-column">
              
    <div class="jobs-details-premium-insight jobs-details-premium-insight--row jobs-details-premium-insight--left-column applicant-experience">
      <h3 class="jobs-details-premium-insight__title">
            Candidate seniority level
      </h3>

      <ul class="jobs-details-premium-insight__list">
              <li>
                <p class="t-14 t-normal mb2 mh0">
                  71<span class="t-16 t-black t-normal jobs-premium-applicant-insights__list-num--highlight">%</span> Entry level candidates
                </p>
                <progress class="jobs-premium-applicant-insights__bars mb4" max="119" value="119" aria-hidden="true"></progress>
              </li>
              <li>
                <p class="t-14 t-normal mb2 mh0">
                  18<span class="t-16 t-black t-normal jobs-premium-applicant-insights__list-num--highlight">%</span> Senior level candidates
                </p>
                <progress class="jobs-premium-applicant-insights__bars mb4" max="119" value="31" aria-hidden="true"></progress>
              </li>
              <li>
                <p class="t-14 t-normal mb2 mh0">
                  1<span class="t-16 t-black t-normal jobs-premium-applicant-insights__list-num--highlight">%</span> CXO level candidates
                </p>
                <progress class="jobs-premium-applicant-insights__bars mb4" max="119" value="2" aria-hidden="true"></progress>
              </li>
              <li>
                <p class="t-14 t-normal mb2 mh0">
                  1<span class="t-16 t-black t-normal jobs-premium-applicant-insights__list-num--highlight">%</span> VP level candidates
                </p>
                <progress class="jobs-premium-applicant-insights__bars mb4" max="119" value="2" aria-hidden="true"></progress>
              </li>
      </ul>
    </div>
  
              
    <div class="jobs-details-premium-insight jobs-details-premium-insight--row applicant-education">
      <h3 class="jobs-details-premium-insight__title">
            Candidate education level
      </h3>

      <ul class="jobs-details-premium-insight__list jobs-premium-applicant-insights__list">
          <li class="jobs-premium-applicant-insights__list-item text-align-right pb1">
            <span class="t-32 pr2
                 t-bold
                 jobs-premium-applicant-insights__list-num--highlight">
              25<span class="t-16 t-black t-normal jobs-premium-applicant-insights__list-num--highlight">%</span>
            </span>
            <span class="jobs-premium-applicant-insights__list-description text-align-left t-14 t-normal">
                have a Bachelor's Degree (Similar to you)
            </span>
          </li>
          <li class="jobs-premium-applicant-insights__list-item text-align-right pb1">
            <span class="t-32 pr2
                
                ">
              34<span class="t-16 t-black t-normal">%</span>
            </span>
            <span class="jobs-premium-applicant-insights__list-description text-align-left t-14 t-normal">
                have a Master's Degree
            </span>
          </li>
          <li class="jobs-premium-applicant-insights__list-item text-align-right pb1">
            <span class="t-32 pr2
                
                ">
              13<span class="t-16 t-black t-normal">%</span>
            </span>
            <span class="jobs-premium-applicant-insights__list-description text-align-left t-14 t-normal">
                have a Master of Science
            </span>
          </li>

          <li class="jobs-premium-applicant-insights__list-item text-align-right">
            <span class="t-32 pr2">
              28<span class="t-16 t-black t-normal">%</span>
            </span>
            <span class="jobs-premium-applicant-insights__list-description text-align-left t-14 t-normal">
              have other degrees
            </span>
          </li>
      </ul>
    </div>
  
          </div>

<!---->    </div>
  
          
    <div class="jobs-premium-company-insights artdeco-card premium-accent-bar
        jobs-premium-null-state jobs-premium-null-state--company" data-view-name="premium-job-company-insights">
      <div class="jobs-premium-branding display-flex justify-space-between full-width align-items-center pb0">
        <svg role="img" aria-hidden="false" aria-label="Premium" xmlns="http://www.w3.org/2000/svg" width="78" height="8" viewBox="0 0 78 8" data-supported-dps="78x8" data-test-icon="premium-badge-xxxsmall">
<!---->    <svg display="var(--hue-web-svg-display-light)">
      <image href="https://static.licdn.com/aero-v1/sc/h/3068z204ww5pg0wt1qbemtzul" x="0" y="0" width="78" height="8"></image>
    </svg>
    <svg display="var(--hue-web-svg-display-dark)">
      <image href="https://static.licdn.com/aero-v1/sc/h/181jrk4wmnppkt9vl21cauxpa" x="0" y="0" width="78" height="8"></image>
    </svg>
</svg>


        <span tabindex="-1" id="ember351" class="artdeco-hoverable-trigger artdeco-hoverable-trigger--content-placed-bottom ember-view">
          <button aria-controls="artdeco-hoverable-artdeco-gen-51" aria-expanded="false" type="button">
            <svg role="img" aria-hidden="false" aria-label="Learn more about company insights" class="jobs-details-premium-insight__tooltip-pebble" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="question-small" data-rtl="true" data-rtl-ignore="iw">
<!---->    
    <use href="#question-small" width="16" height="16"></use>
</svg>

          </button>
          <div id="artdeco-gen-51" class="ember-view"><div id="ember353" class="ember-view"></div></div>
        </span>
      </div>
        <p class="jobs-premium-null-state__title t-sans t-20 t-black">
          There’s not enough quality data on this company just yet
        </p>
        <p class="jobs-premium-null-state__details t-sans t-14 t-black--light">
          Once there are 30 complete member profiles from this company, we’ll be able to show you the company’s growth and hiring trends
        </p>
    </div>
  
    </div>
  

<!---->
<!---->
              <section class="artdeco-card job-details-module">
<!---->
  
                
    <section class="jobs-company jobs-box--fadein mb4" data-view-name="job-details-about-company-module">
      <div class="jobs-company__box">
        <h2 class="text-heading-large">
          About the company
        </h2>

        <div class="display-flex align-items-center mt5">
          <div id="ember283" class="artdeco-entity-lockup artdeco-entity-lockup--size-5 ember-view flex-grow-1">
            <div id="ember284" class="artdeco-entity-lockup__image artdeco-entity-lockup__image--type-square ember-view" type="square">
              <a href="/company/devbite/life/" id="ember285" class="ember-view link-without-hover-state inline-block" data-view-name="job-details-about-company-logo-link">
                <img title="devbite" src="https://media.licdn.com/dms/image/v2/C4D0BAQHM3ckZspX09g/company-logo_100_100/company-logo_100_100/0/1630579823094/devbite_logo?e=1755734400&amp;v=beta&amp;t=8kZPwR5pLP8fjxAc_MzXJlVm_d0Q8U0JN-VemB2KACc" alt="devbite company logo" id="ember286" class="evi-image ember-view">
              </a>
            
</div>
            <div id="ember287" class="artdeco-entity-lockup__content ember-view flex-grow-1">
              <div id="ember288" class="artdeco-entity-lockup__title ember-view t-20">
                <a href="/company/devbite/life/" id="ember289" class="ember-view link-without-visited-state inline-block t-black" data-view-name="job-details-about-company-name-link">
                  devbite
                </a>
              
</div>
              <div id="ember290" class="artdeco-entity-lockup__subtitle ember-view t-16">
                111 followers
              </div>
            </div>
          
</div>
          
    <button class="follow   artdeco-button artdeco-button--secondary ml5" aria-label="Follow" aria-pressed="false" type="button">
          <svg role="none" aria-hidden="true" class="artdeco-button__icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" data-supported-dps="16x16" data-test-icon="add-small">
<!---->    
    <use href="#add-small" width="16" height="16"></use>
</svg>

        <span aria-hidden="true">Follow</span>
    </button>
  
        </div>

        <div class="t-14 mt5">
          Software Development
            <span class="jobs-company__inline-information">
              2-10 employees
            </span>
            <span class="jobs-company__inline-information">
              4 on LinkedIn
            </span>
        </div>
        <p class="jobs-company__company-description text-body-small-open">
          
    <div class="kpMaGIJLKULnSpvtfQAYuvLNeiuofJnVd
        inline-show-more-text--is-collapsed
        inline-show-more-text--is-collapsed-with-line-clamp
        
        
        
        " style="-webkit-line-clamp:3;" dir="ltr" tabindex="-1">

        devbite entwickelt erfolgreiche Onlineshops, responsive<br>Websites und native Apps MIT ERFAHRUNG, GESCHMACK &amp; ♡<br><br>Über 10 Jahre Erfahrung in der Entwicklung von Websites und Onlineshops geben uns die Sicherheit ein Projekt erfolgreich realisieren zu können und den Mut neue Wege zu gehen und moderne Technologien einzusetzen.
      
          <span class="inline-show-more-text__link-container-collapsed">
              <span>…</span>
            <button class="inline-show-more-text__button
                inline-show-more-text__button--light
                link" aria-expanded="false" role="button" type="button">
              show more
            </button>
          </span>

<!---->    </div>
  
        </p>

<!---->
<!---->
<!---->      </div>

      <div class="jobs-company__footer text-align-center">
        <a href="/company/devbite/life/" id="ember291" class="ember-view link-without-hover-state block pv3" aria-label="Show more about the company" data-view-name="job-details-about-company-life-link">
          Show more
        </a>
      </div>
    </section>
  
              
</section>

<!----><!---->        </div>
      </div>

<!---->
<!---->
      
    <div id="ember64" class="ember-view"><!----></div>

    <div id="ember65" class="ember-view"><div id="ember66" class="ember-view"><!----></div></div>
  

      
  <div id="ember67" class="ember-view"><!----></div>


<!---->
<!---->
<!---->
      
    <div>
        
    <div id="ember68" class="ember-view"><!----></div>
  
    </div>
  

<!---->
<!----><!---->    </div>
  
      </div>
  
      </div>
  

      <!---->
    </div>
  
            
        </div>
      </div>
    </div>
</main>

<!---->      </div>

<!---->  </div>
</div>

<!---->
<!---->
</div>`;

export const jobListElement = htmlElement;
