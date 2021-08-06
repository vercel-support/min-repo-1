import { queryField, list } from 'nexus'

export const OpportunityStageNameFindFirstQuery = queryField(
  'findFirstOpportunityStageName',
  {
    type: 'OpportunityStageName',
    args: {
      where: 'OpportunityStageNameWhereInput',
      orderBy: list('OpportunityStageNameOrderByInput'),
      cursor: 'OpportunityStageNameWhereUniqueInput',
      distinct: 'OpportunityStageNameScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.opportunityStageName.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
