import { mutationField, nonNull } from 'nexus'

export const OpportunityStageNameDeleteOneMutation = mutationField(
  'deleteOneOpportunityStageName',
  {
    type: 'OpportunityStageName',
    args: {
      where: nonNull('OpportunityStageNameWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.opportunityStageName.delete({
        where,
        ...select,
      })
    },
  },
)
