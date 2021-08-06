import { mutationField, nonNull } from 'nexus'

export const OpportunityDeleteOneMutation = mutationField(
  'deleteOneOpportunity',
  {
    type: 'Opportunity',
    args: {
      where: nonNull('OpportunityWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.opportunity.delete({
        where,
        ...select,
      })
    },
  },
)
