import { mutationField, nonNull } from 'nexus'

export const LanguageCreateOneMutation = mutationField('createOneLanguage', {
  type: nonNull('Language'),
  args: {
    data: nonNull('LanguageCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.language.create({
      data,
      ...select,
    })
  },
})
