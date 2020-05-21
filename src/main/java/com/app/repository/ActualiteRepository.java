package com.app.repository;

import com.app.domain.Actualite;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Actualite entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ActualiteRepository extends JpaRepository<Actualite, Long> {
}
