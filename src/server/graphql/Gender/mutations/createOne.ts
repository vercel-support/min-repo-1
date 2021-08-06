import { mutationField, nonNull } from 'nexus'

export const GenderCreateOneMutation = mutationField('createOneGender', {
  type: nonNull('Gender'),
  args: {
    data: nonNull('GenderCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.gender.create({
      data,
      ...select,
    })
  },
})
