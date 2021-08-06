import { mutationField, nonNull } from 'nexus'

export const StatusDeleteManyMutation = mutationField('deleteManyStatus', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'StatusWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.status.deleteMany({ where } as any)
  },
})
