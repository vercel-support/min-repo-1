import { queryField, nonNull, list } from 'nexus'

export const OpportunityFindCountQuery = queryField(
  'findManyOpportunityCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'OpportunityWhereInput',
      orderBy: list('OpportunityOrderByInput'),
      cursor: 'OpportunityWhereUniqueInput',
      distinct: 'OpportunityScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.opportunity.count(args as any)
    },
  },
)
