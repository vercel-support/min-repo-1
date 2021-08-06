import { mutationField, nonNull } from 'nexus'

export const StatusDeleteOneMutation = mutationField('deleteOneStatus', {
  type: 'Status',
  args: {
    where: nonNull('StatusWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.status.delete({
      where,
      ...select,
    })
  },
})
