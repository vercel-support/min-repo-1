import { mutationField, nonNull } from 'nexus'

export const GenderDeleteManyMutation = mutationField('deleteManyGender', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'GenderWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.gender.deleteMany({ where } as any)
  },
})
