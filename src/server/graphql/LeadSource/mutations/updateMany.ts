import { mutationField, nonNull } from 'nexus'

export const LeadSourceUpdateManyMutation = mutationField(
  'updateManyLeadSource',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'LeadSourceWhereInput',
      data: nonNull('LeadSourceUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.leadSource.updateMany(args as any)
    },
  },
)
