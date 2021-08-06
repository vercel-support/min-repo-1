import { mutationField, nonNull } from 'nexus'

export const LeadSourceDeleteOneMutation = mutationField(
  'deleteOneLeadSource',
  {
    type: 'LeadSource',
    args: {
      where: nonNull('LeadSourceWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.leadSource.delete({
        where,
        ...select,
      })
    },
  },
)
