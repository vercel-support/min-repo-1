import { mutationField, nonNull } from 'nexus'

export const GenderUpsertOneMutation = mutationField('upsertOneGender', {
  type: nonNull('Gender'),
  args: {
    where: nonNull('GenderWhereUniqueInput'),
    create: nonNull('GenderCreateInput'),
    update: nonNull('GenderUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.gender.upsert({
      ...args,
      ...select,
    })
  },
})
