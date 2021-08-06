import { mutationField, nonNull } from 'nexus'

export const StatusUpdateManyMutation = mutationField('updateManyStatus', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'StatusWhereInput',
    data: nonNull('StatusUpdateManyMutationInput'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.status.updateMany(args as any)
  },
})
