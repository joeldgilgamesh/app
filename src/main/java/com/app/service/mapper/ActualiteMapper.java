package com.app.service.mapper;


import com.app.domain.*;
import com.app.service.dto.ActualiteDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link Actualite} and its DTO {@link ActualiteDTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface ActualiteMapper extends EntityMapper<ActualiteDTO, Actualite> {



    default Actualite fromId(Long id) {
        if (id == null) {
            return null;
        }
        Actualite actualite = new Actualite();
        actualite.setId(id);
        return actualite;
    }
}
