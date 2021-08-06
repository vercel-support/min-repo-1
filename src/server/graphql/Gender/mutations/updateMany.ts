import { mutationField, nonNull } from 'nexus'

export const GenderUpdateManyMutation = mutationField('updateManyGender', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'GenderWhereInput',
    data: nonNull('GenderUpdateManyMutationInput'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.gender.updateMany(args as any)
  },
})
