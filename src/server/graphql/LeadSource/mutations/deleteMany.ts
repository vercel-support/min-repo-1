import { mutationField, nonNull } from 'nexus'

export const LeadSourceDeleteManyMutation = mutationField(
  'deleteManyLeadSource',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'LeadSourceWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.leadSource.deleteMany({ where } as any)
    },
  },
)
